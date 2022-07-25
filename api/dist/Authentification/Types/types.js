"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRegisterManagerStates = void 0;
var LoginRegisterManagerStates;
(function (LoginRegisterManagerStates) {
    LoginRegisterManagerStates[LoginRegisterManagerStates["AwaitingHandleLoginRequest"] = 0] = "AwaitingHandleLoginRequest";
    LoginRegisterManagerStates[LoginRegisterManagerStates["AwaitingInputValidation"] = 1] = "AwaitingInputValidation";
    LoginRegisterManagerStates[LoginRegisterManagerStates["AwaitingPasswordHash"] = 2] = "AwaitingPasswordHash";
    LoginRegisterManagerStates[LoginRegisterManagerStates["AwaitingGetPasswordFromDb"] = 3] = "AwaitingGetPasswordFromDb";
    LoginRegisterManagerStates[LoginRegisterManagerStates["AwaitingPasswordCompare"] = 4] = "AwaitingPasswordCompare";
    LoginRegisterManagerStates[LoginRegisterManagerStates["Completed"] = 5] = "Completed";
})(LoginRegisterManagerStates = exports.LoginRegisterManagerStates || (exports.LoginRegisterManagerStates = {}));
//# sourceMappingURL=types.js.map