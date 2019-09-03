import { Component, OnInit, ViewChild } from "@angular/core";
import { ChatService } from "src/app/services/chat.service";
import { Message, MessageType } from "src/app/models/message";
import { UserService } from "src/app/services/user.service";
import { ReadFile, FilePickerDirective } from "ngx-file-helpers";
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: "[app-chat-window]",
  templateUrl: "./chat-window.component.html",
  styleUrls: ["./chat-window.component.scss"]
})
export class ChatWindowComponent implements OnInit {
  user;
  public picked: ReadFile;

  @ViewChild("filePicker")
  private filePicker: FilePickerDirective;
  activeUser;
  messageText = "";
  chatMessages: Message[] = [];
  constructor(
    private chatService: ChatService,
    private userService: UserService
  ) {
    this.chatService.activeUserSubject.subscribe(user => {
      this.activeUser = user;
    });
    this.chatService.activeMessages.subscribe(messages => {
      if (!messages) messages = [];
      this.chatMessages = [...messages];
      window["scrollToBottom"]();
    });
    this.user = this.userService.getUser();
  }

  ignoreTooBigFile(file: File): boolean {
    console.log(file.size);
    if (file.size >= 1000000) console.log("large file");
    return file.size < 1000000;
  }

  ngOnInit() {}
  sendMessage() {
    if (this.messageText.length) {
      let type = this.chatService.isValidUrl(this.messageText)
        ? MessageType.Url
        : MessageType.Text;
      this.chatService.sendMessage(this.messageText, type);
      this.messageText = "";
    }
  }

  onReadStart(fileCount: number) {
    console.log("Read start");
    //file reading
  }

  onFilePicked(file: ReadFile) {
    this.picked = file;
    console.log(file);
  }

  onReadEnd(fileCount: number) {
    console.log("Read end");
    let messageType = MessageType.File;
    let content = this.picked.content;
    switch (this.picked.type.split("/")[0]) {
      case "image":
        messageType = MessageType.Image;
        break;
      case "video":
        messageType = MessageType.Video;
        break;
      default:
        content = this.picked.name;
        break;
    }
    this.chatMessages.push({
      content: content,
      from: this.user.userId,
      to: this.activeUser.userId,
      type: messageType,
      timeStamp: new Date()
    });
    this.chatService.uploadFile(this.picked.underlyingFile).subscribe(res => {
      console.log(res.path);
      this.chatService.sendMessage(
        `${environment.SERVER_URL}/${res.path}`,
        messageType
      );
    });
    this.filePicker.reset();
  }
}
