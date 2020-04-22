import { MessageType } from './message';

export class OutgoingSignal {
  type: SignalType;
  data: OutgoingSignalData;
}

export class IncomingSignal {
  from: number;
  groupId: number;
  type: MessageType;
  message: string;
}

export enum SignalType {
  register = 1,
  message = 2,
  call=3
}

export interface IncomingSignalData {
  to: number;
  type: MessageType;
  message: string;
  isGroupMessage: boolean;
}

export class OutgoingSignalData {
  to: string;
  type: MessageType;
  message: string;
  isGroupMessage: boolean;
  data:any
}

