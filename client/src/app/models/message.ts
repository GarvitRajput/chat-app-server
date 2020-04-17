export interface Message {
  from: number;
  to: number;
  content: string;
  type: MessageType;
  timeStamp: Date;
  relativeTimeStamp?: string;
  fileName?: string;
}

export enum MessageType {
  Text = 1,
  Image = 2,
  File = 3,
  Video = 4,
  Url = 5,
  InitiateCall = 6,
  AcceptCall = 7,
}
