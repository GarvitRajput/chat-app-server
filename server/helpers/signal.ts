export class IncomingSignal {
  type: SignalType;
  data: IncomingSignalData;
}

export class OutgoingSignal {
  from: number;
  type: SignalDataType;
  groupId: number;
  message: string;
  to: number;
}

export class UserStatusUpdate {
  userId: number;
  status: boolean;
}

export enum SignalType {
  register = 1,
  message = 2
}

export class IncomingSignalData {
  to: string;
  type: SignalDataType;
  message: string;
  isGroupMessage: boolean;
}

export enum SignalDataType {
  text = 1,
  image = 2,
  file = 3,
  video = 4,
  url = 5
}
