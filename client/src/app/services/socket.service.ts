import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";
import { OutgoingSignal } from "../models/signal";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SocketService {
  constructor(private socket: Socket) {
    
  }

  sendSignal(data: OutgoingSignal) {
    let signal = JSON.stringify(data);
    this.socket.emit("message", signal);
  }

  logout() {
    this.socket.emit("logout");
  }
}
