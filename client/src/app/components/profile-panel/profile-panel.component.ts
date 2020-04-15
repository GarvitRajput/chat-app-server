import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { ChatService } from "src/app/services/chat.service";

@Component({
  selector: "app-profile-panel",
  templateUrl: "./profile-panel.component.html",
  styleUrls: ["./profile-panel.component.scss"],
})
export class ProfilePanelComponent implements OnInit {
  user;
  activeUser;
  constructor(
    private chatService: ChatService,
    private userService: UserService
  ) {
    this.userService.userSubject.subscribe((user) => {
      this.user = user;
    });
    this.chatService.activeUserSubject.subscribe((user) => {
      this.activeUser = user;
    });
  }

  ngOnInit(): void {}
}
