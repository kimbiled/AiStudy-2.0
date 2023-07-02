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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
const crypto = require("crypto");
const prisma_service_1 = require("../../prisma/prisma.service");
const gmail_service_1 = require("../../api/google/gmail/gmail.service");
const config_1 = require("../../config");
const string_1 = require("../../helpers/string");
const token_1 = require("../../helpers/token");
let AuthService = exports.AuthService = class AuthService {
    constructor(prisma, gmail) {
        this.prisma = prisma;
        this.gmail = gmail;
        this.strHelper = new string_1.strHelper();
        this.tokenHelper = new token_1.tokenHelper();
        this.pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/gim;
    }
    async signUp({ username, email, password }, res) {
        const normalizedUsername = this.strHelper.normalizer(username);
        const normalizedEmail = this.strHelper.normalizer(email);
        const exist = await this.prisma.user.findFirst({
            where: {
                username: normalizedUsername,
                email: normalizedEmail,
            },
        });
        if (exist)
            return res.status(common_1.HttpStatus.CONFLICT).json({ message: "User already exist" });
        if (!this.strHelper.check(password, this.pattern))
            return res.status(common_1.HttpStatus.CONTINUE).json({ message: "Weak password" });
        const hashedPassword = (0, bcryptjs_1.hashSync)(password);
        const refreshToken = this.tokenHelper.createRT();
        const user = await this.prisma.user.create({
            data: {
                username: normalizedUsername,
                email: normalizedEmail,
                password: hashedPassword,
                refreshToken: refreshToken,
            },
        });
        const accessToken = this.tokenHelper.createAT(user.id);
        return res
            .status(common_1.HttpStatus.CREATED)
            .json({ message: "User successfully created", data: { accessToken, refreshToken } });
    }
    async signIn({ username, password }, res) {
        const normalizedUsername = this.strHelper.normalizer(username);
        const user = await this.prisma.user.findUnique({
            where: {
                username: normalizedUsername,
            },
        });
        if (!user)
            return res.status(common_1.HttpStatus.NOT_FOUND).json({ message: "User not found" });
        const comparePassword = (0, bcryptjs_1.compareSync)(password, user.password);
        if (!comparePassword)
            return res.status(common_1.HttpStatus.UNAUTHORIZED).json({ message: "Incorrect password" });
        let refreshToken;
        (0, jsonwebtoken_1.verify)(user.refreshToken, config_1.default.RT_JWT_SALT, (error) => {
            if (error)
                refreshToken = this.tokenHelper.createRT();
            else {
                refreshToken = user.refreshToken;
            }
        });
        const accessToken = this.tokenHelper.createAT(user.id);
        return res.status(common_1.HttpStatus.OK).json({ accessToken, refreshToken });
    }
    async passwordReset({ email }, res) {
        const normalizedEmail = this.strHelper.normalizer(email);
        const user = await this.prisma.user.findUnique({
            where: {
                email: normalizedEmail,
            },
        });
        if (!user)
            return res.status(common_1.HttpStatus.NOT_FOUND).json({ message: "User with this email is not found" });
        const newPassword = crypto.randomBytes(5).toString("hex");
        const hashedPassword = (0, bcryptjs_1.hashSync)(newPassword);
        await this.prisma.user.update({
            where: {
                email: normalizedEmail,
            },
            data: {
                password: hashedPassword,
            },
        });
        await this.gmail.send({
            to: normalizedEmail,
            subject: "why you forgot your password",
            html: `<p>New password: <h1>${newPassword}</h1></p>`,
        });
        return res.status(common_1.HttpStatus.OK).json({ message: "Password was successfully reset" });
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, gmail_service_1.GmailService])
], AuthService);
//# sourceMappingURL=auth.service.js.map