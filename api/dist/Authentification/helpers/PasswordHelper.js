"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
class PasswordHelper {
    static hash = (password, salt = 10) => {
        return bcrypt.hash(password, salt);
    };
    static compare = (passwordToCompareTo, passwordInDb) => {
        return bcrypt.compare(passwordToCompareTo, passwordInDb);
    };
}
exports.default = PasswordHelper;
//# sourceMappingURL=PasswordHelper.js.map