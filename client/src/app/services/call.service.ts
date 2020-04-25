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
import { PeerConnection } from "../helper/PeerConnection";
import { StreamOptions } from "../models/stream";
import { UserService } from "./user.service";
import { IfStmt } from "@angular/compiler";

var pcConfig = PeerConnection.getPeerConnectionConfig();

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
  maximizeWindow = new BehaviorSubject<boolean>(false);
  localStreamSubject = new BehaviorSubject<any>({});
  remoteStreamSubject = new BehaviorSubject<any>({});
  streamSubject = new BehaviorSubject<any>({});
  ongoingCall: OngoingCall;
  localStream;
  isMaximizedWindow = false;
  pc;
  user;
  remoteStream: any;
  sender: any;
  dataChannel;
  localPeer = {};
  peer = {};

  constructor(
    private socketService: SocketService,
    private userService: UserService
  ) {
    this.ongoingCall = new OngoingCall();
    this.ongoingCall.status = CallStatus.Idle;
    this.user = this.userService.getUser();
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
    this.localStream = await this.requestStream(StreamOptions.Audio);
    this.ongoingCall.status = CallStatus.Outgoing;
    this.sendCallSignal(id, MessageType.InitiateCall);
  }

  disableVideo() {
    let streamId = this.user.userId + "_video";
    if (this.peer[streamId]) {
      this.peer[streamId].closeConnection();
      this.localStreamSubject.next({});
      this.peer[streamId] = null;
      this.sendSignalOverDataChannel({ type: "close", id: streamId });
    }
  }

  async enableVideo() {
    let videoStream = <any>await this.requestStream(StreamOptions.Video);
    this.localStreamSubject.next(videoStream);
    let videoTrack = videoStream.getVideoTracks()[0];
    let streamId = this.user.userId + "_video";
    this.peer[streamId] = new PeerConnection(
      streamId,
      videoTrack,
      videoStream,
      this.dataChannerSender.bind(this),
      null
    );
    this.peer[streamId].initialize();
  }

  disableScreen() {
    let streamId = this.user.userId + "_screen";
    if (this.peer[streamId]) {
      this.peer[streamId].closeConnection();
      this.peer[streamId] = null;
      this.sendSignalOverDataChannel({ type: "close", id: streamId });
    }
  }
  toggleMute() {
    let audioTrack = this.localStream.getAudioTracks()[0];
    audioTrack.enabled = !audioTrack.enabled;
  }

  async enableScreen() {
    let videoStream = <any>await this.requestScreen();
    let videoTrack = videoStream.getVideoTracks()[0];
    let streamId = this.user.userId + "_screen";
    this.peer[streamId] = new PeerConnection(
      streamId,
      videoTrack,
      videoStream,
      this.dataChannerSender.bind(this),
      null
    );
    this.peer[streamId].initialize();
  }

  toggleWindow() {
    this.isMaximizedWindow = !this.isMaximizedWindow;
    this.maximizeWindow.next(this.isMaximizedWindow);
  }
  disableAudio() {}

  disconnect() {
    this.sendSignalOverDataChannel({ type: "disconnect" });
    this.closeAllConnections();
  }

  closeAllConnections() {
    this.disableScreen();
    this.disableVideo();
    this.dataChannel.close();
    this.dataChannel = null;
    this.pc.close();
    this.pc = null;
    let audioTrack = this.localStream.getAudioTracks()[0];
    audioTrack.stop();

    this.localStreamSubject.next({});
    this.remoteStreamSubject.next({});
    this.ongoingCall.status = CallStatus.Idle;
    this.isMaximizedWindow = false;
    this.maximizeWindow.next(this.isMaximizedWindow);
  }
  busy(id) {
    this.sendCallSignal(id, MessageType.Busy);
  }
  async acceptCall(id) {
    this.localStream = await this.requestStream(StreamOptions.Audio);
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

  requestStream(op) {
    return new Promise((resolve, reject) => {
      let audio = false;
      let video = false;
      if (op == StreamOptions.Audio) audio = true;
      if (op == StreamOptions.Video) video = true;
      window["navigator"].mediaDevices
        .getUserMedia({
          audio: audio,
          video: video,
        })
        .then((stream) => {
          this.addLog("Adding local stream.");
          resolve(stream);
        })
        .catch(function (e) {
          alert("getUserMedia() error: " + e.name);
          reject();
        });
    });
  }

  async requestScreen() {
    let captureStream = null;
    var displayMediaStreamConstraints = {
      video: true, // or pass HINTS
    };
    try {
      if (navigator.mediaDevices["getDisplayMedia"]) {
        captureStream = await navigator.mediaDevices["getDisplayMedia"](
          displayMediaStreamConstraints
        );
      } else {
        captureStream = await navigator["getDisplayMedia"](
          displayMediaStreamConstraints
        );
      }
    } catch (err) {
      console.error("Error: " + err);
    }
    return captureStream;
  }

  addLog(...arg) {
    //console.log(...arg);
  }

  createPeerConnection(createDC = false) {
    try {
      this.pc = new RTCPeerConnection(pcConfig);
      window["pc"] = this.pc;
      if (createDC) this.createDataChannel();
      this.pc.onicecandidate = this.handleIceCandidate.bind(this);
      this.pc.onaddstream = this.handleRemoteStreamAdded.bind(this);
      this.pc.ondatachannel = this.onDataChannel.bind(this);
      this.pc.onremovestream = this.handleRemoteStreamRemoved.bind(this);
      this.pc.onconnectionstatechange = this.handlePeerConnectionStateChange.bind(
        this
      );
      this.addLog("Created RTCPeerConnnection");
    } catch (e) {
      this.addLog("Failed to create PeerConnection, exception: " + e.message);
      alert("Cannot create RTCPeerConnection object.");
      return;
    }
  }

  onDataChannel(event) {
    this.addLog("data channel created");
    if (!this.dataChannel) {
      this.addLog(event);
      this.dataChannel = event.channel;
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
    this.addLog("called");
    this.dataChannel.onerror = (error) => {
      this.addLog("Data Channel Error:", error);
    };

    this.dataChannel.addEventListener("message", (event) => {
      const message = event.data;
      let signal = JSON.parse(message);
      if (signal.type == "dc") {
        let data = JSON.parse(signal.data);
        if (!this.peer[data.id]) {
          this.peer[data.id] = new PeerConnection(
            data.id,
            null,
            null,
            this.dataChannerSender.bind(this),
            this.processPeerStream.bind(this)
          );
        }
        this.peer[data.id].processSignal(data);
      } else if (signal.type == "close") {
        this.closePeerConnection(signal);
      } else if (signal.type == "disconnect") {
        this.closeAllConnections();
      }
      this.addLog("Got Data Channel Message:", event.data);
    });
    this.dataChannel.onopen = () => {
      this.addLog(arguments);
    };

    this.dataChannel.onclose = () => {
      this.addLog("The Data Channel is Closed");
    };
  }

  processPeerStream(id, stream) {
    this.streamSubject.next({ id: id, stream: stream });
  }

  closePeerConnection(data) {
    this.peer[data.id].closeConnection();
    this.peer[data.id] = null;
    this.streamSubject.next({ id: data.id, stream: null });
  }

  dataChannerSender(data) {
    let signal = {
      type: "dc",
      data: JSON.stringify(data),
    };
    this.sendSignalOverDataChannel(signal);
  }
  sendSignalOverDataChannel(signal) {
    if (this.dataChannel) this.dataChannel.send(JSON.stringify(signal));
  }
}
