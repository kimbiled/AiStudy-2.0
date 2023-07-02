"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EssayModule = void 0;
const common_1 = require("@nestjs/common");
const essay_controller_1 = require("./essay.controller");
const essay_service_1 = require("./essay.service");
const openAi_service_1 = require("../../api/openai/openAi.service");
let EssayModule = exports.EssayModule = class EssayModule {
};
exports.EssayModule = EssayModule = __decorate([
    (0, common_1.Module)({
        controllers: [essay_controller_1.EssayController],
        providers: [essay_service_1.EssayService, openAi_service_1.OpenAiService],
    })
], EssayModule);
//# sourceMappingURL=essay.module.js.map