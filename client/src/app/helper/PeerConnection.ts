export class PeerConnection {
  id: string = "null";
  pc: any;
  sender;
  track;
  stream;
  processPeerStream;
  constructor(id: string, track, stream, sender, processPeerStream) {
    this.id = id;
    this.track = track;
    this.stream = stream;
    this.sender = sender;
    this.processPeerStream = processPeerStream;
  }
  static getPeerConnectionConfig() {
    return {
      iceServers: [
        {
          urls: "stun:stun.l.google.com:19302",
        },
      ],
    };
  }
  initialize = function () {
    this.createPeerConnection();
  };
  closeConnection() {
    if (this.track) this.track.stop();
    this.pc.close();
  }
  processSignal = function (signal: PeerConnectionSignal) {
    switch (signal.type) {
      case PeerConnectionSignalType.Offer:
        this.processOffer(signal.data);
        break;
      case PeerConnectionSignalType.Answer:
        this.processAnswer(signal.data);
        break;
      case PeerConnectionSignalType.Candidate:
        this.processCandidate(signal.data);
        break;
    }
  };

  private createPeerConnection = function (flag = true) {
    this.pc = new RTCPeerConnection(PeerConnection.getPeerConnectionConfig());
    if (this.track) this.pc.addTrack(this.track, this.stream);
    this.pc.onicecandidate = this.handleIceCandidate.bind(this);
    this.pc.onaddstream = this.handleRemoteStreamAdded.bind(this);
    this.pc.onremovestream = this.handleRemoteStreamRemoved.bind(this);
    this.pc.onconnectionstatechange = this.handlePeerConnectionStateChange.bind(
      this
    );
    if (flag)
      this.pc.createOffer(
        this.setLocalAndSendOffer.bind(this),
        this.handleCreateOfferError.bind(this)
      );
  };

  private handleRemoteStreamAdded = function (e) {
    this.addLog("handleRemoteStreamAdded", e);
    if (this.processPeerStream) {
      this.processPeerStream(this.id, e.stream);
    }
  };

  private handleRemoteStreamRemoved = function (e) {
    if (this.processPeerStream) {
      this.processPeerStream(this.id, null);
    }
    //this.addLog("handleRemoteStreamRemoved", e);
  };

  private handlePeerConnectionStateChange = function (event) {
    switch (this.pc.connectionState) {
      case "connected":
        // The connection has become fully connected
        break;
      case "disconnected":
      case "failed":
        this.pc.close();
        break;
      case "closed":
        if (this.processPeerStream) {
          this.pc.close();
        }
        break;
    }
  };

  private setLocalAndSendOffer = function (sessionDescription) {
    this.pc.setLocalDescription(sessionDescription);
    this.sendSignal(PeerConnectionSignalType.Offer, sessionDescription);
  };

  private handleCreateOfferError = function (event) {
    this.addLog("createOffer() error: ", event);
  };

  private processOffer = function (offer) {
    if (!this.pc) this.createPeerConnection(false);
    this.pc.setRemoteDescription(new RTCSessionDescription(offer));
    //this.addLog("Sending answer to peer.");
    this.pc
      .createAnswer()
      .then(
        this.setLocalAndSendAnswer.bind(this),
        this.onCreateSessionDescriptionError.bind(this)
      );
  };

  private setLocalAndSendAnswer = function (sessionDescription) {
    this.pc.setLocalDescription(sessionDescription);
    //this.addLog("setLocalAndSendAnswer sending message", sessionDescription);
    this.sendSignal(PeerConnectionSignalType.Answer, sessionDescription);
  };

  private onCreateSessionDescriptionError = function (error) {
    this.addLog("Failed to create session description: " + error.toString());
  };

  private processAnswer = function (data) {
    this.pc.setRemoteDescription(new RTCSessionDescription(data));
  };

  private handleIceCandidate = function (event) {
    // this.addLog("icecandidate event: ", event);
    if (event.candidate) {
      this.sendSignal(PeerConnectionSignalType.Candidate, {
        type: "candidate",
        label: event.candidate.sdpMLineIndex,
        id: event.candidate.sdpMid,
        candidate: event.candidate.candidate,
      });
    } else {
      //this.addLog("End of candidates.");
    }
  };

  private processCandidate = function (data) {
    var candidate = new RTCIceCandidate({
      sdpMLineIndex: data.label,
      candidate: data.candidate,
    });
    this.pc.addIceCandidate(candidate);
  };

  private addLog = function (...arg) {
    console.log(...arg);
  };

  private sendSignal = function (type, signal) {
    this.sender({
      id: this.id,
      type: type,
      data: signal,
    });
  };
}

class PeerConnectionSignal {
  id: string;
  type: PeerConnectionSignalType;
  data: any;
}

enum PeerConnectionSignalType {
  Offer = 1,
  Answer = 2,
  Candidate = 3,
}
