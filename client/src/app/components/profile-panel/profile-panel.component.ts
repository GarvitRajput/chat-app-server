import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { ChatService } from "src/app/services/chat.service";
import { MessageType } from "src/app/models/message";

@Component({
  selector: "app-profile-panel",
  templateUrl: "./profile-panel.component.html",
  styleUrls: ["./profile-panel.component.scss"],
})
export class ProfilePanelComponent implements OnInit {
  user;
  activeUser;
  query="";
  files = [];
  constructor(
    private chatService: ChatService,
    private userService: UserService
  ) {
    this.userService.userSubject.subscribe((user) => {
      this.user = user;
    });
    this.chatService.activeUserSubject.subscribe((user) => {
      this.activeUser = user;
      this.query="";
      this.queryChange();
    });
    this.chatService.activeMessages.subscribe((messages) => {
      if (!messages) messages = [];
      this.files = [];
      messages.forEach((msg) => {
        if (
          msg.type == MessageType.File ||
          msg.type == MessageType.Video ||
          msg.type == MessageType.Image
        ) {
          this.files.push({
            name: msg.content.split("/").slice(-1).pop(),
            id: msg.timeStamp.valueOf().toString(),
            type: msg.type,
          });
        }
      });
    });
  }

  queryChange(){
    this.chatService.updateSearchQuery(this.query);
  }

  getFileName(msg) {
    return msg.content.split("/").slice(-1).pop();
  }

  handleFileClick(id) {
    var el = document.getElementById(id);
    if (el) {
      el.scrollIntoView();
    }
  }

  ngOnInit(): void {}
}
