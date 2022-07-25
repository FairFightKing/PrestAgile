"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const UserEntity_1 = require("../Entity/UserEntity");
const PasswordHelper_1 = require("../../Authentification/helpers/PasswordHelper");
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
let UserRepository = class UserRepository extends typeorm_1.Repository {
    async register({ email, password, uuid }) {
        const user = new UserEntity_1.default();
        user.email = email;
        user.uuid = uuid;
        user.salt = await bcrypt.genSalt();
        user.password = await PasswordHelper_1.default.hash(password, user.salt);
        try {
            await user.save();
        }
        catch (e) {
            //error code for already exist
            if (e.errno === 19 || e.code === '23505')
                throw new common_1.ConflictException('Email already exist');
            if (e.code === '23502')
                throw new common_1.InternalServerErrorException(`${e.driverError.column} not found. ${e.driverError}`);
            throw new common_1.InternalServerErrorException(`${e.driverError}`);
        }
        return true;
    }
    async validateUserPassword({ email, password }) {
        const auth = await this.findOne({ email });
        if (auth && (await auth.validatePassword(password)))
            return {
                email: auth.email,
                uuid: auth.uuid,
            };
        return null;
    }
};
UserRepository = __decorate([
    (0, typeorm_1.EntityRepository)(UserEntity_1.default)
], UserRepository);
exports.default = UserRepository;
//# sourceMappingURL=UserRepository.js.map