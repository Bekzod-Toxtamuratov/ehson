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
exports.UserCardsController = void 0;
const common_1 = require("@nestjs/common");
const user_cards_service_1 = require("./user_cards.service");
const create_user_card_dto_1 = require("./dto/create-user_card.dto");
const update_user_card_dto_1 = require("./dto/update-user_card.dto");
const swagger_1 = require("@nestjs/swagger");
const user_guard_1 = require("../guards/user.guard");
let UserCardsController = class UserCardsController {
    constructor(userCardsService) {
        this.userCardsService = userCardsService;
    }
    create(createUserCardDto, req) {
        return this.userCardsService.create(createUserCardDto, req);
    }
    findAll() {
        return this.userCardsService.findAll();
    }
    findOne(id) {
        return this.userCardsService.findOne(+id);
    }
    update(id, updateUserCardDto) {
        return this.userCardsService.update(+id, updateUserCardDto);
    }
    remove(id) {
        return this.userCardsService.remove(+id);
    }
};
exports.UserCardsController = UserCardsController;
__decorate([
    (0, common_1.UseGuards)(user_guard_1.UserGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_card_dto_1.CreateUserCardDto, Object]),
    __metadata("design:returntype", void 0)
], UserCardsController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(user_guard_1.UserGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserCardsController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(user_guard_1.UserGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserCardsController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(user_guard_1.UserGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_card_dto_1.UpdateUserCardDto]),
    __metadata("design:returntype", void 0)
], UserCardsController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(user_guard_1.UserGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserCardsController.prototype, "remove", null);
exports.UserCardsController = UserCardsController = __decorate([
    (0, swagger_1.ApiTags)('user-cards'),
    (0, common_1.Controller)('user-cards'),
    __metadata("design:paramtypes", [user_cards_service_1.UserCardsService])
], UserCardsController);
//# sourceMappingURL=user_cards.controller.js.map