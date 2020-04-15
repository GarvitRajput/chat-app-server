import { Component, OnInit, Input } from "@angular/core";
import { Message } from "src/app/models/message";
import { ChatService } from 'src/app/services/chat.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: "[app-message-list]",
  templateUrl: "./message-list.component.html",
  styleUrls: ["./message-list.component.scss"]
})
export class MessageListComponent implements OnInit {
  @Input() messages: Message[];
  activeUser;
  user;
  constructor(private chatService: ChatService,userService:UserService) {
    this.chatService.activeUserSubject.subscribe(user => {
      this.activeUser = user;
    });
    this.user=userService.getUser();
  }

  ngOnInit() {}
}
