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
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const formInputValidatorImpl_1 = require("../Validator/Impl/formInputValidatorImpl");
class RegisterDto {
    email;
    password;
    uuid;
}
__decorate([
    (0, swagger_1.ApiProperty)({
        minimum: 5,
        maximum: 50,
        required: true,
        name: 'email',
        type: 'string',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(5),
    (0, class_validator_1.MaxLength)(50),
    (0, class_validator_1.Matches)(formInputValidatorImpl_1.EmailRegexp, { message: 'Email not conform' }),
    __metadata("design:type", Object)
], RegisterDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        minimum: 8,
        maximum: 30,
        required: true,
        name: 'password',
        description: 'At least 8 character long, 1 capital, 1 small, 1 special character , 1 number',
        type: 'string',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8),
    (0, class_validator_1.MaxLength)(30),
    (0, class_validator_1.Matches)(formInputValidatorImpl_1.PasswordRegexp, { message: 'Password too weak' }),
    __metadata("design:type", String)
], RegisterDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        minimum: 5,
        maximum: 50,
        required: true,
        name: 'uuid',
        type: 'string',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(5),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", Object)
], RegisterDto.prototype, "uuid", void 0);
exports.default = RegisterDto;
//# sourceMappingURL=RegisterDto.js.map