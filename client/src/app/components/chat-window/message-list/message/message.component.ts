import { Component, OnInit, Input } from "@angular/core";
import { Message, MessageType } from "src/app/models/message";
import { ChatService } from "src/app/services/chat.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "[app-message]",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.scss"],
})
export class MessageComponent implements OnInit {
  metadata;
  hideinfo = false;
  constructor(private chatService: ChatService) {}
  @Input() message: Message;
  @Input() isReceived: boolean;
  @Input() activeUser;
  @Input() user;
  ngOnInit() {
    this.message.id = this.message.timeStamp.valueOf().toString();
    this.message.relativeTimeStamp = this.chatService.getTimeStamp(
      this.message.timeStamp
    );
    if (
      !environment.production && this.message.content.indexOf(environment.SERVER_URL)==-1&&
      (this.message.type === MessageType.Image ||
        this.message.type === MessageType.Video ||
        this.message.type === MessageType.File)
    ) {
      this.message.content = environment.SERVER_URL + this.message.content;
    }
    if (this.message.type === MessageType.Url) {
      this.chatService.getUrlMetadata(this.message.content).subscribe((res) => {
        if (res.success) {
          this.metadata = res.data.metadata;
          this.metadata.url = this.message.content;
          if (this.message.content.indexOf(this.metadata.title) > 1)
            this.hideinfo = true;
          window["scrollToBottom"]();
        }
      });
    }
    if (this.message.type === MessageType.File) {
      this.message.fileName = this.message.content.split("/")[
        this.message.content.split("/").length - 1
      ];
    }
  }
}
