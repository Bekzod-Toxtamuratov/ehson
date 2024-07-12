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
exports.SocialDistributorController = void 0;
const common_1 = require("@nestjs/common");
const social_distributor_service_1 = require("./social_distributor.service");
const create_social_distributor_dto_1 = require("./dto/create-social_distributor.dto");
const update_social_distributor_dto_1 = require("./dto/update-social_distributor.dto");
const admin_guard_1 = require("../guards/admin.guard");
let SocialDistributorController = class SocialDistributorController {
    constructor(socialDistributorService) {
        this.socialDistributorService = socialDistributorService;
    }
    create(createSocialDistributorDto) {
        return this.socialDistributorService.create(createSocialDistributorDto);
    }
    findAll() {
        return this.socialDistributorService.findAll();
    }
    findOne(id) {
        return this.socialDistributorService.findOne(+id);
    }
    update(id, updateSocialDistributorDto) {
        return this.socialDistributorService.update(+id, updateSocialDistributorDto);
    }
    remove(id) {
        return this.socialDistributorService.remove(+id);
    }
};
exports.SocialDistributorController = SocialDistributorController;
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_social_distributor_dto_1.CreateSocialDistributorDto]),
    __metadata("design:returntype", void 0)
], SocialDistributorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SocialDistributorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SocialDistributorController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_social_distributor_dto_1.UpdateSocialDistributorDto]),
    __metadata("design:returntype", void 0)
], SocialDistributorController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SocialDistributorController.prototype, "remove", null);
exports.SocialDistributorController = SocialDistributorController = __decorate([
    (0, common_1.Controller)('social-distributor'),
    __metadata("design:paramtypes", [social_distributor_service_1.SocialDistributorService])
], SocialDistributorController);
//# sourceMappingURL=social_distributor.controller.js.map