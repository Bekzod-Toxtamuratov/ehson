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
exports.SuccessfullyCompletedController = void 0;
const common_1 = require("@nestjs/common");
const successfully_completed_service_1 = require("./successfully_completed.service");
const create_successfully_completed_dto_1 = require("./dto/create-successfully_completed.dto");
const update_successfully_completed_dto_1 = require("./dto/update-successfully_completed.dto");
const swagger_1 = require("@nestjs/swagger");
const admin_guard_1 = require("../guards/admin.guard");
let SuccessfullyCompletedController = class SuccessfullyCompletedController {
    constructor(successfullyCompletedService) {
        this.successfullyCompletedService = successfullyCompletedService;
    }
    create(createSuccessfullyCompletedDto) {
        return this.successfullyCompletedService.create(createSuccessfullyCompletedDto);
    }
    findAll() {
        return this.successfullyCompletedService.findAll();
    }
    findOne(id) {
        return this.successfullyCompletedService.findOne(+id);
    }
    update(id, updateSuccessfullyCompletedDto) {
        return this.successfullyCompletedService.update(+id, updateSuccessfullyCompletedDto);
    }
    remove(id) {
        return this.successfullyCompletedService.remove(+id);
    }
};
exports.SuccessfullyCompletedController = SuccessfullyCompletedController;
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_successfully_completed_dto_1.CreateSuccessfullyCompletedDto]),
    __metadata("design:returntype", void 0)
], SuccessfullyCompletedController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SuccessfullyCompletedController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SuccessfullyCompletedController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_successfully_completed_dto_1.UpdateSuccessfullyCompletedDto]),
    __metadata("design:returntype", void 0)
], SuccessfullyCompletedController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SuccessfullyCompletedController.prototype, "remove", null);
exports.SuccessfullyCompletedController = SuccessfullyCompletedController = __decorate([
    (0, swagger_1.ApiTags)('successfully-completed'),
    (0, common_1.Controller)('successfully-completed'),
    __metadata("design:paramtypes", [successfully_completed_service_1.SuccessfullyCompletedService])
], SuccessfullyCompletedController);
//# sourceMappingURL=successfully_completed.controller.js.map