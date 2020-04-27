import { Component, OnInit, ViewChild, ChangeDetectorRef } from "@angular/core";
import { ChatService } from "src/app/services/chat.service";
import { Message, MessageType } from "src/app/models/message";
import { UserService } from "src/app/services/user.service";
import { ReadFile, FilePickerDirective } from "ngx-file-helpers";
import { environment } from "src/environments/environment";
import { CallService } from "src/app/services/call.service";

@Component({
  selector: "[app-chat-window]",
  templateUrl: "./chat-window.component.html",
  styleUrls: ["./chat-window.component.scss"],
})
export class ChatWindowComponent implements OnInit {
  user;
  public picked: ReadFile;

  @ViewChild("filePicker", { static: true })
  private filePicker: FilePickerDirective;
  showEmojiPicker = false;
  activeUser;
  ongoingCall = false;
  messageText = "";
  query = "";
  chatMessages: Message[] = [];
  constructor(
    private chatService: ChatService,
    private userService: UserService,
    private callService: CallService,
    private cdr:ChangeDetectorRef
  ) {
    this.chatService.activeUserSubject.subscribe((user) => {
      this.activeUser = user;
      this.resetHeight();
    });
    this.chatService.activeMessages.subscribe((messages) => {
      if (!messages) messages = [];
      this.chatMessages = [...messages];
      window["scrollToBottom"]();
      this.resetHeight();
    });
    this.chatService.searchSubject.subscribe((q) => {
      this.query = q;
    });
    this.resetHeight();
    this.user = this.userService.getUser();
  }
  viewProfile() {
    this.userService.viewProfile(this.activeUser.userId);
  }

  call() {
    console.log(this.activeUser);
    this.callService.makeCall(this.activeUser.userId);
  }

  toggleEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji(event) {
    this.messageText = `${this.messageText}${event.emoji.native}`;
    this.showEmojiPicker = false;
    window["$"]("#message-input").focus();
  }

  toggleCall() {
    this.call();
    //this.ongoingCall = !this.ongoingCall;
    this.resetHeight();
  }

  ignoreTooBigFile(file: File): boolean {
    if (file.size >= 3000000) console.log("large file");
    return file.size < 3000000;
  }

  ngOnInit() {
    this.resetHeight();
  }
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
    //file reading
  }

  onFilePicked(file: ReadFile) {
    this.picked = file;
  }

  resetHeight() {
    setTimeout(() => {
      let $ = window["$"];
      if ($(".audio-call").outerHeight()) {
        $(".msg-container").height(
          window.screen.height -
            $(".audio-call").outerHeight() -
            $(".msg-chat-header").outerHeight() -
            $(".msgbox-container").outerHeight() -
            125
        );
      } else {
        $(".msg-container").height(
          window.screen.height -
            $(".msg-chat-header").outerHeight() -
            $(".msgbox-container").outerHeight() -
            125
        );
      }
      window["scrollToBottom"]();
    }, 100);
  }

  onReadEnd(fileCount: number) {
    try {
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
        id: "",
        content: content,
        from: this.user.userId,
        to: this.activeUser.userId,
        type: messageType,
        timeStamp: new Date(),
      });
      this.chatService
        .uploadFile(this.picked.underlyingFile)
        .subscribe((res) => {
          this.chatService.sendMessage(res.path, messageType);
        });
      this.filePicker.reset();
    } catch (error) {}
  }
}
