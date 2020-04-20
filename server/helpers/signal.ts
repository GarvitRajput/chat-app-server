export class IncomingSignal {
  type: SignalType;
  data: IncomingSignalData;
}

export class OutgoingSignal {
  type: SignalType;
  data: OutgoingSignalData;
}

export class OutgoingSignalData {
  from: number;
  type: SignalDataType;
  groupId: number;
  message: string;
  to: number;
  data: any;
}

export class UserStatusUpdate {
  userId: number;
  status: boolean;
}

export enum SignalType {
  register = 1,
  message = 2,
  call = 3,
}

export class IncomingSignalData {
  to: string;
  type: SignalDataType;
  message: string;
  data: any;
  isGroupMessage: boolean;
}

export enum SignalDataType {
  text = 1,
  image = 2,
  file = 3,
  video = 4,
  url = 5,
  initiateCall = 6,
  acceptCall = 7,
  rejectCall = 8,
  disconnect = 9,
  busy = 10,
}
