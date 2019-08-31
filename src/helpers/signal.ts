export class IncomingSignal {
    type: SignalType;
    data: IncomingSignalData;
  }
  
  export class OutgoingSignal {
    from: number;
    groupId: number;
    message: string;
    to:number;
  }
  
  export enum SignalType {
    register = 1,
    message = 2
  }
  
  export interface OutgoingSignalData {
    to: number;
    type: SignalDataType;
    message: string;
    isGroupMessage: boolean;
  }
  
  export class IncomingSignalData {
    to: string;
    type: SignalDataType;
    message: string;
    isGroupMessage: boolean;
  }
  
  export enum SignalDataType {
    text = 1,
    url = 2,
    file = 3,
    audio = 4,
    video = 5
  }
  