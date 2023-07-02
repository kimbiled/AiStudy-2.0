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
exports.EssayService = void 0;
const common_1 = require("@nestjs/common");
const openAi_service_1 = require("../../api/openai/openAi.service");
let EssayService = exports.EssayService = class EssayService {
    constructor(openai) {
        this.openai = openai;
    }
    async check({ text, prompt }, res) {
        const rule = `Answer length must be less than 150. You are a tutor, your task is check user's essay on topic ${prompt}. First, give determined IELTS band score. Second, give 3 words listing advantages and disadvatnages each. Third, give overall feedback. DO NOT FORGET LENGTH SHOULD NOT BE MORE THAN 150 WORDS. add  symbol '--' between them, so can easily convert it into an array 
			\n\ Example: Score: 7.5 --  Coherence, Lexical, Grammar -- Lack of words, lack of grammar, No idioms -- Feedback: some feedback`;
        const rez = await this.openai.createChat(text, rule);
        return res.status(common_1.HttpStatus.OK).json({ message: "good", data: rez });
    }
    async createSAT(res) {
        const rule = "You are SAT tutor, your mission is to create a SAT reading text sample and create reading passage questions according to that text, output must be TEXT: (created text)\\nQUESTIONS: (1. question\\n2. question ...up to 6 questions)";
        const rez = await this.openai.createChat("create SAT reading test", rule);
        return res.status(common_1.HttpStatus.OK).json({ data: rez });
    }
};
exports.EssayService = EssayService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [openAi_service_1.OpenAiService])
], EssayService);
//# sourceMappingURL=essay.service.js.map