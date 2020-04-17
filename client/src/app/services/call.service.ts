import { Injectable } from "@angular/core";
import { SocketService } from "./socket.service";
import { BehaviorSubject } from "rxjs";
import {
  OutgoingSignal,
  SignalType,
  OutgoingSignalData,
  IncomingSignal,
} from "../models/signal";
import { MessageType } from "../models/message";

@Injectable({
  providedIn: "root",
})
export class CallService {
  incomingCall = new BehaviorSubject<any>({});
  constructor(private socketService: SocketService) {
    this.socketService.event("message").subscribe((_signal: string) => {
      let signal = JSON.parse(_signal);
      if (signal.type == SignalType.call) {
        if (signal.data.type === MessageType.InitiateCall)
          this.incomingCall.next(signal.data.from);
      }
    });
  }

  makeCall(id) {
    let signal = new OutgoingSignal();
    signal.type = SignalType.call;
    signal.data = new OutgoingSignalData();
    signal.data.to = id;
    signal.data.type = MessageType.InitiateCall;
    signal.data.isGroupMessage = false;
    this.socketService.sendSignal(signal);
  }
}
