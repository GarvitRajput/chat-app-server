import { Injectable } from "@angular/core";
import { SocketService } from "./socket.service";
import { BehaviorSubject } from "rxjs";
import {
  OutgoingSignal,
  SignalType,
  OutgoingSignalData,
  IncomingSignal,
} from "../models/signal";
import { MessageType } from "../models/message";
import { OngoingCall, CallStatus } from "../models/call";

var pcConfig = {
  iceServers: [
    {
      urls: "stun:stun.l.google.com:19302",
    },
  ],
};

// Set up audio and video regardless of what devices are present.
var sdpConstraints = {
  offerToReceiveAudio: true,
  offerToReceiveVideo: true,
};

const dataChannelOptions = {
  ordered: true, // do not guarantee order
  maxPacketLifeTime: 30000, // in milliseconds
};

@Injectable({
  providedIn: "root",
})
export class CallService {
  incomingCall = new BehaviorSubject<any>({});
  localStreamSubject = new BehaviorSubject<any>({});
  remoteStreamSubject = new BehaviorSubject<any>({});
  ongoingCall: OngoingCall;
  localStream;
  pc;
  remoteStream: any;
  sender: any;
  dataChannel;

  constructor(private socketService: SocketService) {
    this.ongoingCall = new OngoingCall();
    this.ongoingCall.status = CallStatus.Idle;
    this.socketService.event("message").subscribe(async (_signal: string) => {
      let signal = JSON.parse(_signal);
      if (signal.type == SignalType.call) {
        await this.processCallSignal(signal.data);
      }
    });
  }

  private async processCallSignal(callSignal) {
    switch (callSignal.type) {
      case MessageType.InitiateCall:
        if (this.ongoingCall.status === CallStatus.Idle) {
          this.ongoingCall.status = CallStatus.Incoming;
          this.incomingCall.next(callSignal.from);
        } else {
          this.sendCallSignal(callSignal.from, MessageType.Busy);
        }
        break;
      case MessageType.Busy:
        this.ongoingCall.status = CallStatus.Idle;
        this.addLog("busy");
        break;
      case MessageType.RejectCall:
        this.ongoingCall.status = CallStatus.Idle;
        this.addLog("rejected");
        break;
      case MessageType.Disconnect:
        this.ongoingCall.status = CallStatus.Idle;
        this.addLog("disconnect");
        break;
      case MessageType.AcceptCall:
        this.ongoingCall.status = CallStatus.InCall;
        this.ongoingCall.connectedUserId = callSignal.from;
        this.ongoingCall.callStartTime = new Date();
        this.addLog("accepted", this.ongoingCall);
        this.initiateCall();
        break;
      case MessageType.Offer:
        this.onOffer(callSignal.data);
        break;
      case MessageType.Answer:
        this.hendleAnswer(callSignal.data);
        break;
      case MessageType.Candidate:
        this.onCandidate(callSignal.data);
        break;
    }
  }

  private sendCallSignal(id, type, data = null) {
    let signal = new OutgoingSignal();
    signal.type = SignalType.call;
    signal.data = new OutgoingSignalData();
    signal.data.to = id;
    signal.data.type = type;
    signal.data.data = data;
    signal.data.isGroupMessage = false;
    this.socketService.sendSignal(signal);
  }

  async makeCall(id) {
    this.localStream = await this.requestStream();
    this.localStreamSubject.next(this.localStream);
    this.ongoingCall.status = CallStatus.Outgoing;
    this.sendCallSignal(id, MessageType.InitiateCall);
  }

  disableVideo() {
    let videoTrack = this.localStream.getVideoTracks()[0];
    videoTrack.stop();
    this.pc.removeTrack(this.localStream);
    this.localStream.removeTrack(this.sender);
  }

  async enableVideo() {
    let stream: any = await this.requestStream();
    let videoTrack = stream.getVideoTracks()[0];
    this.localStream.addTrack(stream.getVideoTracks()[0]);
    this.pc.addTrack(videoTrack, stream);
  }
  disableAudio() {}

  disconnect() {
    this.pc.close();
    this.pc = null;
    this.ongoingCall.status = CallStatus.Idle;
  }
  busy(id) {
    this.sendCallSignal(id, MessageType.Busy);
  }
  async acceptCall(id) {
    this.localStream = await this.requestStream();
    this.localStreamSubject.next(this.localStream);
    this.ongoingCall.status = CallStatus.InCall;
    this.ongoingCall.connectedUserId = id;
    this.ongoingCall.callStartTime = new Date();
    this.sendCallSignal(id, MessageType.AcceptCall);
    this.addLog("accepted", this.ongoingCall);
    this.createPeerConnection();
    let audioTrack = this.localStream.getAudioTracks()[0];
    this.pc.addTrack(audioTrack, this.localStream);
  }
  rejectCall(id) {
    this.ongoingCall.status = CallStatus.Idle;
    this.sendCallSignal(id, MessageType.RejectCall);
  }
  initiateCall() {
    this.addLog(">>>>>> creating peer connection");
    this.createPeerConnection(true);
    let audioTrack = this.localStream.getAudioTracks()[0];
    this.pc.addTrack(audioTrack, this.localStream);
    this.doCall();
  }

  doCall() {
    this.addLog("Sending offer to peer");
    this.pc.createOffer(
      this.setLocalAndSendOffer.bind(this),
      this.handleCreateOfferError.bind(this)
    );
  }

  onCandidate(message) {
    var candidate = new RTCIceCandidate({
      sdpMLineIndex: message.label,
      candidate: message.candidate,
    });
    this.pc.addIceCandidate(candidate);
  }

  onOffer(message) {
    this.pc.setRemoteDescription(new RTCSessionDescription(message));
    this.doAnswer();
  }

  doAnswer() {
    this.addLog("Sending answer to peer.");
    this.pc
      .createAnswer()
      .then(
        this.setLocalAndSendAnswer.bind(this),
        this.onCreateSessionDescriptionError.bind(this)
      );
  }

  hendleAnswer(data) {
    this.pc.setRemoteDescription(new RTCSessionDescription(data));
  }

  setLocalAndSendAnswer(sessionDescription) {
    this.pc.setLocalDescription(sessionDescription);
    this.addLog("setLocalAndSendAnswer sending message", sessionDescription);
    this.sendCallSignal(
      this.ongoingCall.connectedUserId,
      MessageType.Answer,
      sessionDescription
    );
  }

  setLocalAndSendOffer(sessionDescription) {
    this.pc.setLocalDescription(sessionDescription);
    this.addLog("setLocalAndSendOffer sending message", sessionDescription);
    this.sendCallSignal(
      this.ongoingCall.connectedUserId,
      MessageType.Offer,
      sessionDescription
    );
  }

  onCreateSessionDescriptionError(error) {
    console.trace("Failed to create session description: " + error.toString());
  }

  handleCreateOfferError(event) {
    this.addLog("createOffer() error: ", event);
  }

  requestStream() {
    return new Promise((resolve, reject) => {
      window["navigator"].mediaDevices
        .getUserMedia({
          audio: true,
          video: false,
        })
        .then((stream) => {
          this.addLog("Adding local stream.");
          // var localVideo = document.querySelector("#localVideo");
          // localVideo["srcObject"] = stream;
          resolve(stream);
        })
        .catch(function (e) {
          alert("getUserMedia() error: " + e.name);
          reject();
        });
    });
  }

  addLog(...arg) {
    console.log(...arg);
  }

  createPeerConnection(createDC = false) {
    try {
      this.pc = new RTCPeerConnection(null);
      window["pc"] = this.pc;
      if (createDC) this.createDataChannel();
      this.pc.onicecandidate = this.handleIceCandidate.bind(this);
      this.pc.onaddstream = this.handleRemoteStreamAdded.bind(this);
      this.pc.ondatachannel = this.onDataChannel.bind(this);
      this.pc.onremovestream = this.handleRemoteStreamRemoved.bind(this);
      this.pc.onconnectionstatechange = this.handlePeerConnectionStateChange.bind(
        this
      );
      this.pc.on;
      this.addLog("Created RTCPeerConnnection");
    } catch (e) {
      this.addLog("Failed to create PeerConnection, exception: " + e.message);
      alert("Cannot create RTCPeerConnection object.");
      return;
    }
  }

  onDataChannel(event) {
    console.log("data channel created");
    if (!this.dataChannel) {
      console.log(event);
      this.dataChannel = event.channel;
      event.channel.send("hiii");
      this.attachEventsToDataChannel();
    }
  }

  handlePeerConnectionStateChange(event) {
    switch (this.pc.connectionState) {
      case "connected":
        // The connection has become fully connected
        break;
      case "disconnected":
      case "failed":
        this.callDesconnected();
        break;
      case "closed":
        this.callDesconnected();
        break;
    }
  }

  callDesconnected() {
    this.remoteStreamSubject.next({});
    this.ongoingCall.status = CallStatus.Idle;
    //alert("failed 2");
  }

  handleIceCandidate(event) {
    this.addLog("icecandidate event: ", event);
    if (event.candidate) {
      this.sendCallSignal(
        this.ongoingCall.connectedUserId,
        MessageType.Candidate,
        {
          type: "candidate",
          label: event.candidate.sdpMLineIndex,
          id: event.candidate.sdpMid,
          candidate: event.candidate.candidate,
        }
      );
    } else {
      this.addLog("End of candidates.");
    }
  }

  handleRemoteStreamAdded(event) {
    this.addLog("Remote stream added.");
    this.remoteStream = event.stream;
    this.remoteStreamSubject.next(this.remoteStream);
    // var remoteVideo = document.querySelector("#remoteVideo");
    // remoteVideo["srcObject"] = this.remoteStream;
  }
  handleRemoteStreamRemoved(event) {
    this.remoteStreamSubject.next(null);
    this.addLog("Remote stream removed. Event: ", event);
  }

  createDataChannel() {
    if (!this.dataChannel) {
      this.dataChannel = this.pc.createDataChannel("test");
      this.attachEventsToDataChannel();
      window["dc"] = this.dataChannel;
    }
  }

  attachEventsToDataChannel() {
    console.log("called");
    this.dataChannel.onerror = (error) => {
      console.log("Data Channel Error:", error);
    };

    this.dataChannel.addEventListener("message", (event) => {
      const message = event.data;
      console.log("Got Data Channel Message:", event.data);
    });
    this.dataChannel.onopen = () => {
      console.log(arguments);
      this.dataChannel.send("Hello World!");
    };

    this.dataChannel.onclose = () => {
      console.log("The Data Channel is Closed");
    };
  }
}
