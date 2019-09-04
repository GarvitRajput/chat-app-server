import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";
import { OutgoingSignal } from "../models/signal";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SocketService {
  incomingMessages = new BehaviorSubject<any>({});
  constructor(private socket: Socket) {
    this.incomingMessages.next({});
    this.socket.fromEvent("message").subscribe((data: string) => {
      data = JSON.parse(data);
      console.log(data);
      this.incomingMessages.next(data);
    });
  }

  sendSignal(data: OutgoingSignal) {
    let signal = JSON.stringify(data);
    this.socket.emit("message", signal);
  }
}
