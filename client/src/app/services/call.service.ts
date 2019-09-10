import { Injectable } from "@angular/core";
import { SocketService } from "./socket.service";
import { BehaviorSubject } from "rxjs";
import { CallSignal, CallSignalType } from '../models/call';

@Injectable({
  providedIn: "root"
})
export class CallService {
  incomingCall = new BehaviorSubject<any>({});
  constructor(private socketService: SocketService) {
    this.socketService.event("call").subscribe((signal:CallSignal) => {
      console.log(signal);
      if(signal.type=CallSignalType.IncomingCall)
      this.incomingCall.next(signal.from)
    });
  }

  makeCall(id){
    this.socketService.sendSignal(id,"call")
  }
}
