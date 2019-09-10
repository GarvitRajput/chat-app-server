import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";
import { OutgoingSignal } from "../models/signal";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SocketService {
  constructor(private socket: Socket) {}

  event(event: string) {
    return this.socket.fromEvent(event);
  }

  sendSignal(data: OutgoingSignal, event: string = "message") {
    let signal = JSON.stringify(data);
    this.socket.emit(event, signal);
  }

  logout() {
    this.socket.emit("logout");
  }
}
