import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { CallService } from "src/app/services/call.service";

@Component({
  selector: "app-max-video-call",
  templateUrl: "./max-video-call.component.html",
  styleUrls: ["./max-video-call.component.scss"],
})
export class MaxVideoCallComponent implements OnInit {
  remoteStream;
  localStream;
  videoDisabled = true;
  screenDisabled = true;
  streams = {};
  videoStream;
  audioDisabled = false;
  maxWindow = false;
  constructor(
    private callService: CallService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.callService.remoteStreamSubject.subscribe((stream) => {
      this.remoteStream = stream;
      this.cdr.detectChanges();
    });
    this.callService.localStreamSubject.subscribe((stream) => {
      this.localStream = stream;
      this.cdr.detectChanges();
    });
    this.callService.streamSubject.subscribe((s) => {
      if (s.id) this.streams[s.id] = s.stream;
      this.cdr.detectChanges();
    });
    this.callService.maximizeWindow.subscribe((flag) => {
      this.maxWindow = flag;
      console.log("called");
      this.cdr.detectChanges();
    });
  }

  toggleWindow() {
    this.callService.toggleWindow();
    this.cdr.detectChanges();
  }

  getMainVideoStream() {
    if (
      this.streams[this.callService.ongoingCall.connectedUserId + "_screen"] &&
      this.streams[this.callService.ongoingCall.connectedUserId + "_screen"].id
    )
      return this.streams[
        this.callService.ongoingCall.connectedUserId + "_screen"
      ];
    else if (
      this.streams[this.callService.ongoingCall.connectedUserId + "_video"] &&
      this.streams[this.callService.ongoingCall.connectedUserId + "_video"].id
    )
      return this.streams[
        this.callService.ongoingCall.connectedUserId + "_video"
      ];
    else return null;
  }
  getSecondaryVideoStream() {
    if (
      this.streams[this.callService.ongoingCall.connectedUserId + "_screen"] &&
      this.streams[this.callService.ongoingCall.connectedUserId + "_screen"]
        .id &&
      this.streams[this.callService.ongoingCall.connectedUserId + "_video"] &&
      this.streams[this.callService.ongoingCall.connectedUserId + "_video"].id
    ) {
      return this.streams[
        this.callService.ongoingCall.connectedUserId + "_video"
      ];
    } else return null;
  }

  toggleVideo() {
    if (this.videoDisabled) {
      this.callService.enableVideo();
    } else {
      this.callService.disableVideo();
    }
    this.videoDisabled = !this.videoDisabled;
    this.cdr.detectChanges();
  }

  toggleScreen() {
    if (this.screenDisabled) {
      this.callService.enableScreen();
    } else {
      this.callService.disableScreen();
    }
    this.screenDisabled = !this.screenDisabled;
    this.cdr.detectChanges();
  }
  toggleMute() {
    this.callService.toggleMute();
    this.audioDisabled = !this.audioDisabled;
    this.cdr.detectChanges();
  }
  disconnect() {
    this.callService.disconnect();
  }
}
