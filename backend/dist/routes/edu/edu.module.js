"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EduModule = void 0;
const common_1 = require("@nestjs/common");
const edu_service_1 = require("./edu.service");
const edu_controller_1 = require("./edu.controller");
const prisma_service_1 = require("../../prisma/prisma.service");
let EduModule = exports.EduModule = class EduModule {
};
exports.EduModule = EduModule = __decorate([
    (0, common_1.Module)({
        controllers: [edu_controller_1.EduController],
        providers: [edu_service_1.EduService, prisma_service_1.PrismaService],
    })
], EduModule);
//# sourceMappingURL=edu.module.js.map