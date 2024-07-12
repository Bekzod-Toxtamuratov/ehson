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
exports.EhsonInfoController = void 0;
const common_1 = require("@nestjs/common");
const ehson_info_service_1 = require("./ehson_info.service");
const create_ehson_info_dto_1 = require("./dto/create-ehson_info.dto");
const update_ehson_info_dto_1 = require("./dto/update-ehson_info.dto");
const swagger_1 = require("@nestjs/swagger");
const admin_guard_1 = require("../guards/admin.guard");
let EhsonInfoController = class EhsonInfoController {
    constructor(ehsonInfoService) {
        this.ehsonInfoService = ehsonInfoService;
    }
    create(createEhsonInfoDto) {
        return this.ehsonInfoService.create(createEhsonInfoDto);
    }
    findAll() {
        return this.ehsonInfoService.findAll();
    }
    findOne(id) {
        return this.ehsonInfoService.findOne(+id);
    }
    update(id, updateEhsonInfoDto) {
        return this.ehsonInfoService.update(+id, updateEhsonInfoDto);
    }
    remove(id) {
        return this.ehsonInfoService.remove(+id);
    }
};
exports.EhsonInfoController = EhsonInfoController;
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ehson_info_dto_1.CreateEhsonInfoDto]),
    __metadata("design:returntype", void 0)
], EhsonInfoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EhsonInfoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EhsonInfoController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_ehson_info_dto_1.UpdateEhsonInfoDto]),
    __metadata("design:returntype", void 0)
], EhsonInfoController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EhsonInfoController.prototype, "remove", null);
exports.EhsonInfoController = EhsonInfoController = __decorate([
    (0, swagger_1.ApiTags)('ehson-info'),
    (0, common_1.Controller)('ehson-info'),
    __metadata("design:paramtypes", [ehson_info_service_1.EhsonInfoService])
], EhsonInfoController);
//# sourceMappingURL=ehson_info.controller.js.map