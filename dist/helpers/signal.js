"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IncomingSignal {
}
exports.IncomingSignal = IncomingSignal;
class OutgoingSignal {
}
exports.OutgoingSignal = OutgoingSignal;
class OutgoingSignalData {
}
exports.OutgoingSignalData = OutgoingSignalData;
class UserStatusUpdate {
}
exports.UserStatusUpdate = UserStatusUpdate;
var SignalType;
(function (SignalType) {
    SignalType[SignalType["register"] = 1] = "register";
    SignalType[SignalType["message"] = 2] = "message";
    SignalType[SignalType["call"] = 3] = "call";
})(SignalType = exports.SignalType || (exports.SignalType = {}));
class IncomingSignalData {
}
exports.IncomingSignalData = IncomingSignalData;
var SignalDataType;
(function (SignalDataType) {
    SignalDataType[SignalDataType["text"] = 1] = "text";
    SignalDataType[SignalDataType["image"] = 2] = "image";
    SignalDataType[SignalDataType["file"] = 3] = "file";
    SignalDataType[SignalDataType["video"] = 4] = "video";
    SignalDataType[SignalDataType["url"] = 5] = "url";
    SignalDataType[SignalDataType["initiateCall"] = 6] = "initiateCall";
    SignalDataType[SignalDataType["acceptCall"] = 7] = "acceptCall";
    SignalDataType[SignalDataType["rejectCall"] = 8] = "rejectCall";
    SignalDataType[SignalDataType["disconnect"] = 9] = "disconnect";
    SignalDataType[SignalDataType["busy"] = 10] = "busy";
})(SignalDataType = exports.SignalDataType || (exports.SignalDataType = {}));
//# sourceMappingURL=signal.js.map