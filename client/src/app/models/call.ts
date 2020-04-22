export class CallSignal {
  type: CallSignalType;
  from: number;
  data: any;
}

export enum CallSignalType {
  IncomingCall = 1,
}

export enum CallStatus {
  Idle = 1,
  Incoming = 2,
  Outgoing = 3,
  InCall = 4,
}

export class OngoingCall {
  status: CallStatus;
  connectedUserId: number;
  callStartTime: any;
}
