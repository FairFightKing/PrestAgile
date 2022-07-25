"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManager = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const UserService_1 = require("../Service/UserService");
const UserEntity_1 = require("../Entity/UserEntity");
const GetUser_1 = require("../../Authentification/Decorator/GetUser");
let UserManager = class UserManager {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    getUserInfo(user) {
        return this.userService.getUser(user);
    }
    updateUserInfo(user) {
        return this.userService.updateUserInfo(user);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, GetUser_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserEntity_1.default]),
    __metadata("design:returntype", Promise)
], UserManager.prototype, "getUserInfo", null);
__decorate([
    (0, common_1.Patch)(),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    __param(0, (0, GetUser_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserEntity_1.default]),
    __metadata("design:returntype", Promise)
], UserManager.prototype, "updateUserInfo", null);
UserManager = __decorate([
    (0, swagger_1.ApiTags)('User'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('user'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __metadata("design:paramtypes", [UserService_1.default])
], UserManager);
exports.UserManager = UserManager;
//# sourceMappingURL=UserManager.js.map