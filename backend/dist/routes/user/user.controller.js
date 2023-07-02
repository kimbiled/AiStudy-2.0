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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const dto_1 = require("./dto");
let UserController = exports.UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async getMe(body, res) {
        return await this.userService.getMe(body, res);
    }
    async getUser(body, res) {
        return await this.userService.getUser(body, res);
    }
    async updateSettings(body, res) {
        return await this.userService.updateSettings(body, res);
    }
};
__decorate([
    (0, common_1.Post)("/get-me"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.getMeDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getMe", null);
__decorate([
    (0, common_1.Get)("/get-user"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.getUserDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    (0, common_1.Post)("/update-settings"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.updateSettingsDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateSettings", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)("/user"),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map