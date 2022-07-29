"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const UserManager_1 = require("../Manager/UserManager");
const UserService_1 = require("../Service/UserService");
const UserRepository_1 = require("../Repository/UserRepository");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([UserRepository_1.default])],
        controllers: [UserManager_1.UserManager],
        providers: [UserService_1.default],
        exports: [UserService_1.default],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=UserModule.js.map