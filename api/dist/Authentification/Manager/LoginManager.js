"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginManager = void 0;
const types_1 = require("../Types/types");
const formInputValidatorImpl_1 = require("../Validator/Impl/formInputValidatorImpl");
const PasswordHelper_1 = require("../helpers/PasswordHelper");
class LoginManager {
    State = types_1.LoginRegisterManagerStates.AwaitingHandleLoginRequest;
    input;
    constructor(input) {
        this.input = input;
    }
    async HandleLoginRequest() {
        if (this.State !== types_1.LoginRegisterManagerStates.AwaitingHandleLoginRequest)
            throw Error('The process has already started');
        try {
            this.State = types_1.LoginRegisterManagerStates.AwaitingInputValidation;
            this.MakeInputValidation();
            // TODO : this is in Register to add in DB
            this.State = types_1.LoginRegisterManagerStates.AwaitingPasswordHash;
            await this.MakePasswordHash();
            this.State = types_1.LoginRegisterManagerStates.AwaitingPasswordCompare;
            await this.MakePasswordCompare();
            this.State = types_1.LoginRegisterManagerStates.Completed;
        }
        catch (e) {
            return {
                status: 500,
                message: e,
            };
        }
        if (this.State !== types_1.LoginRegisterManagerStates.Completed)
            throw Error('Login Request ended early');
        return {
            status: 200,
            sessionToken: 'dahbdwk',
        };
    }
    MakeInputValidation() {
        if (this.State !== types_1.LoginRegisterManagerStates.AwaitingInputValidation)
            throw Error('The Login process is not waiting for Input Validation');
        return formInputValidatorImpl_1.default.checkInputFields(this.input);
    }
    async MakePasswordHash() {
        if (this.State !== types_1.LoginRegisterManagerStates.AwaitingPasswordHash)
            throw Error('The Login process is not waiting for Password Hash');
        this.input.passwordHash = await PasswordHelper_1.default.hash(this.input.password);
        return true;
    }
    async MakePasswordCompare() {
        if (this.State !== types_1.LoginRegisterManagerStates.AwaitingPasswordCompare)
            throw Error('The Login process is not waiting for Password Compare');
        // TODO : GET PASSWORDHASH FROM DB
        return await PasswordHelper_1.default.compare(this.input.password, this.input.passwordHash);
    }
}
exports.LoginManager = LoginManager;
//# sourceMappingURL=LoginManager.js.map