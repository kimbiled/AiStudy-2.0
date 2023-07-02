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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EduController = void 0;
const common_1 = require("@nestjs/common");
const edu_service_1 = require("./edu.service");
const dto_1 = require("./dto");
let EduController = exports.EduController = class EduController {
    constructor(eduService) {
        this.eduService = eduService;
    }
    async create(body, res) {
        return await this.eduService.create(body, res);
    }
    async getAll(body, res) {
        return await this.eduService.getAll(body, res);
    }
};
__decorate([
    (0, common_1.Post)("/create"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.createDto, Object]),
    __metadata("design:returntype", Promise)
], EduController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("/get-all"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.getAllDto, Object]),
    __metadata("design:returntype", Promise)
], EduController.prototype, "getAll", null);
exports.EduController = EduController = __decorate([
    (0, common_1.Controller)("/edu"),
    __metadata("design:paramtypes", [edu_service_1.EduService])
], EduController);
//# sourceMappingURL=edu.controller.js.map