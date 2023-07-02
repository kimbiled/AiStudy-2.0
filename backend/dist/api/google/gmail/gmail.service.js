"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GmailService = void 0;
const common_1 = require("@nestjs/common");
const nodemailer_1 = require("nodemailer");
const google_1 = require("../../../config/google");
let GmailService = exports.GmailService = class GmailService {
    constructor() {
        this.transport = (0, nodemailer_1.createTransport)({
            service: "gmail",
            auth: {
                type: "OAUTH2",
                user: google_1.default.ROOT_MAIL,
                clientId: google_1.default.CLIENT_ID,
                clientSecret: google_1.default.CLIENT_SECRET,
                refreshToken: google_1.default.REFRESH_TOKEN,
            },
        });
    }
    async send({ to, subject, html }) {
        await this.transport
            .sendMail({
            from: google_1.default.ROOT_MAIL,
            to: to,
            subject: subject,
            html: html,
        })
            .then((response) => {
            console.log(response);
        })
            .catch((reason) => {
            console.log(reason);
        });
    }
};
exports.GmailService = GmailService = __decorate([
    (0, common_1.Injectable)()
], GmailService);
//# sourceMappingURL=gmail.service.js.map