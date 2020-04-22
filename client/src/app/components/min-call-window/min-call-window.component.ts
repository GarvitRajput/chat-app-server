import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { CallService } from "src/app/services/call.service";

@Component({
  selector: "app-min-call-window",
  templateUrl: "./min-call-window.component.html",
  styleUrls: ["./min-call-window.component.scss"],
})
export class MinCallWindowComponent implements OnInit {
  remoteStream;
  localStream;
  videoDisabled = false;
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
    });
  }
  toggleVideo() {
    if (this.videoDisabled) {
      this.callService.enableVideo();
    } else {
      this.callService.disableVideo();
    }
    this.videoDisabled = !this.videoDisabled;
  }
}
