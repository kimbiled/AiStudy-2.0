"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenAiService = void 0;
const common_1 = require("@nestjs/common");
const openai_1 = require("openai");
const openai_2 = require("../../config/openai");
let OpenAiService = exports.OpenAiService = class OpenAiService {
    constructor() {
        this.conf = new openai_1.Configuration({
            organization: openai_2.default.ORG,
            username: openai_2.default.USERNAME,
            password: openai_2.default.PASSWORD,
            apiKey: openai_2.default.API_KEY,
        });
        this.openai = new openai_1.OpenAIApi(this.conf);
        this.model = "gpt-3.5-turbo";
    }
    async createChat(userRequest, systemRule) {
        return this.openai
            .createChatCompletion({
            model: this.model,
            messages: [
                {
                    role: "system",
                    content: systemRule,
                },
                { role: "user", content: userRequest },
            ],
        })
            .then((response) => {
            console.log(response.data.choices);
            return response.data.choices[0].message.content;
        })
            .catch((error) => {
            console.log(error);
            return "Server side error, please try again one more time";
        });
    }
};
exports.OpenAiService = OpenAiService = __decorate([
    (0, common_1.Injectable)()
], OpenAiService);
//# sourceMappingURL=openAi.service.js.map