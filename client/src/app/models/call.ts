export class CallSignal{
    type:CallSignalType;
    from:number;
    data:any
}

export enum CallSignalType{
    IncomingCall=1
}