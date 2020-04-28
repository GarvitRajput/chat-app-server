import { Component, OnInit, Input } from "@angular/core";
import { environment } from "src/environments/environment.prod";
import { UserService } from "src/app/services/user.service";
import { MessageType } from "src/app/models/message";

@Component({
  selector: "[app-user-list-item]",
  templateUrl: "./user-list-item.component.html",
  styleUrls: ["./user-list-item.component.scss"],
})
export class UserListItemComponent implements OnInit {
  @Input() user;
  constructor(private userService: UserService) {}

  ngOnInit() {
    if (
      this.user.lastMessage &&
      (this.user.lastMessage.messageType === MessageType.Image ||
        this.user.lastMessage.messageType === MessageType.Video ||
        this.user.lastMessage.messageType === MessageType.File)
    ) {
      this.user.lastMessage.message = this.user.lastMessage.message
        .split("/")
        .slice(-1)
        .pop();
    }
  }
  viewProfile() {
    this.userService.viewProfile(this.user.userId);
  }
}
