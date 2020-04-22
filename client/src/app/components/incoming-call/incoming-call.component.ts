import { Component, OnInit } from "@angular/core";
import { CallService } from "src/app/services/call.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-incoming-call",
  templateUrl: "./incoming-call.component.html",
  styleUrls: ["./incoming-call.component.scss"],
})
export class IncomingCallComponent implements OnInit {
  callingUser;
  constructor(
    private callService: CallService,
    private userService: UserService
  ) {
    this.callService.incomingCall.subscribe((id) => {
      this.callingUser = this.userService.getUserByUserId(id);
      console.log(this.callingUser);
    });
  }
  reject(){
    this.callService.rejectCall(this.callingUser.userId);
    this.callingUser=null;
  }
  accept(){
    this.callService.acceptCall(this.callingUser.userId);
    this.callingUser=null;
  }

  ngOnInit(): void {}
}
