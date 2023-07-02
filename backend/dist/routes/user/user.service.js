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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let UserService = exports.UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getMe({ accessToken, refreshToken }, res) {
        try {
            if (!accessToken && !refreshToken)
                return res.status(common_1.HttpStatus.UNAUTHORIZED).json({ message: "No jwt provided" });
            if (!res.locals.id)
                return;
            const user = await this.prisma.user.findUnique({
                where: {
                    id: res.locals.id,
                },
            });
            if (!user)
                return res.status(common_1.HttpStatus.NOT_FOUND).json({ message: "User not found" });
            delete user.password;
            delete user.refreshToken;
            return res.status(common_1.HttpStatus.OK).json({ user, accessToken, refreshToken });
        }
        catch (error) {
            console.log(error);
        }
    }
    async getUser({ id }, res) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: id,
            },
        });
        if (!user)
            return res.status(common_1.HttpStatus.NOT_FOUND).json({ message: "User not found" });
        delete user.password;
        delete user.refreshToken;
        return res.status(common_1.HttpStatus.OK).json({ user });
    }
    async updateSettings({ id, firstName, lastName, bio }, res) {
        await this.prisma.user.update({
            where: {
                id: id,
            },
            data: {
                firstName: firstName,
                lastName: lastName,
                bio: bio,
            },
        });
        return res.status(common_1.HttpStatus.OK).json({ message: "User settings are updated" });
    }
};
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map