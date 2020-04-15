import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { ChatService } from "src/app/services/chat.service";

@Component({
  selector: "[app-chat-menu]",
  templateUrl: "./chat-menu.component.html",
  styleUrls: ["./chat-menu.component.scss"]
})
export class ChatMenuComponent implements OnInit {
  users;
  query="";
  constructor(
    private userService: UserService,
    private chatService: ChatService
  ) {}
  index = 0;
  ngOnInit() {
    this.userService.activeUsers.subscribe(data => {
      if (data && data.length) {
        this.users = data;
        if (this.users[this.index]) this.updateActiveUser(this.index);
      }
    });
  }

  updateActiveUser(index) {
    this.users[this.index].opened = false;
    this.index = index;
    this.chatService.setActiveUser(this.users[index]);
    this.users[this.index].opened = true;
  }
}
