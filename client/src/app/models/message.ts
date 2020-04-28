export interface Message {
  from: number;
  to: number;
  id: string;
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
  RejectCall = 8,
  Disconnect = 9,
  Busy = 10,
  Offer = 11,
  Answer = 12,
  Candidate = 13,
}
