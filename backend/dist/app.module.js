"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const gmail_module_1 = require("./api/google/gmail/gmail.module");
const openAi_module_1 = require("./api/openai/openAi.module");
const auth_module_1 = require("./routes/auth/auth.module");
const user_module_1 = require("./routes/user/user.module");
const edu_module_1 = require("./routes/edu/edu.module");
const essay_module_1 = require("./routes/essay/essay.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, user_module_1.UserModule, edu_module_1.EduModule, essay_module_1.EssayModule, gmail_module_1.GmailModule, openAi_module_1.OpenAiModule],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map