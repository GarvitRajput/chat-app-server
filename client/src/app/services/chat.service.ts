import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable, BehaviorSubject } from "rxjs";
import { SocketService } from "./socket.service";
import {
  OutgoingSignal,
  SignalType,
  OutgoingSignalData
} from "../models/signal";
import { UserService } from "./user.service";
import { Socket } from "ngx-socket-io";

@Injectable({
  providedIn: "root"
})
export class ChatService {
  activeUserSubject = new BehaviorSubject<any>(null);
  activeMessages = new BehaviorSubject<any>(null);
  private _activeUser;
  private user;
  private messages = { users: {}, groups: {} };
  constructor(
    private apiService: ApiService,
    private socket: Socket,
    private socketService: SocketService,
    private userService: UserService
  ) {
    this.user = this.userService.getUser();
    this.userService.userSubject.subscribe(user => {
      this.user = user;
    });

    this.socket.fromEvent("message").subscribe((signal: string) => {
      let msg = JSON.parse(signal);
      if (msg) {
        let message = this.formatMessage(
          msg.message,
          msg.type,
          msg.from,
          msg.to
        );
        this.pushMessage(message, true);
      }
    });
  }

  createGroup(data) {
    return Observable.create(ob => {
      this.apiService.post("/group/create", data).subscribe(res => {
        ob.next(res.success);
      });
    });
  }

  getUrlMetadata(url) {
    return Observable.create(ob => {
      this.apiService.post("/metadata/get", { url }).subscribe(res => {
        ob.next(res);
      });
    });
  }

  setActiveUser(user) {
    this._activeUser = user;
    this.activeUserSubject.next(this._activeUser);
    if (!this.messages.users[this._activeUser.userId]) {
      this.initializeChat(this._activeUser.userId, false);
      this.apiService
        .post("/chat/messages", { isGroup: false, id: this._activeUser.userId })
        .subscribe(response => {
          if (response.success) {
            this.messages.users[this._activeUser.userId].fetchStatus = true;
            response.data.messages.forEach(msg => {
              this.messages.users[this._activeUser.userId].chat.push(
                this.formatMessage(
                  msg.message,
                  msg.messageType,
                  msg.senderId,
                  msg.receiverId,
                  new Date(msg.sendDate)
                )
              );
            });
          }
          this.refreshChatWindow();
        });
    } else this.refreshChatWindow();
  }

  getTimeStamp(date: Date) {
    return date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true
    });
  }

  sendMessage(text: string, type) {
    let message = this.formatMessage(text, type);
    let signal = new OutgoingSignal();
    signal.type = SignalType.message;
    signal.data = new OutgoingSignalData();
    signal.data.type = message.type;
    signal.data.message = message.content;
    signal.data.to = this._activeUser.userId;
    signal.data.isGroupMessage = false;
    this.socketService.sendSignal(signal);
    this.pushMessage(message);
  }

  private formatMessage(
    text,
    type,
    from = this.user.userId,
    to = this._activeUser.userId,
    timestamp = new Date()
  ) {
    return {
      timeStamp: timestamp,
      to: to,
      content: text,
      type: type,
      from: from
    };
  }

  private refreshChatWindow() {
    if (!this.messages.users[this._activeUser.userId])
      this.initializeChat(this._activeUser.userId, false);
    this.activeMessages.next(this.messages.users[this._activeUser.userId].chat);
  }
  initializeChat(id, isGroup) {
    this.messages[isGroup ? "group" : "users"][id] = {
      fetchStatus: false,
      chat: []
    };
  }

  private pushMessage(msg, incoming = false) {
    if (!this.messages.users[incoming ? msg.from : msg.to]) {
      this.initializeChat(incoming ? msg.from : msg.to, false);
    }
    this.messages.users[incoming ? msg.from : msg.to].chat.push(msg);
    this.refreshChatWindow();
  }

  uploadFile(file) {
    return Observable.create(ob => {
      const formData: FormData = new FormData();
      formData.append("file", file, file.name);
      this.apiService.post("/file/upload", formData).subscribe(
        res => {
          if (res.success) ob.next(res.data);
        },
        () => {
          ob.next(false);
        }
      );
    });
  }

  isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  }
}
