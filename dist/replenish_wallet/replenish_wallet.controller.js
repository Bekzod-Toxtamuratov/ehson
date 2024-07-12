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
exports.ReplenishWalletController = void 0;
const common_1 = require("@nestjs/common");
const replenish_wallet_service_1 = require("./replenish_wallet.service");
const create_replenish_wallet_dto_1 = require("./dto/create-replenish_wallet.dto");
const cookie_getter_decorator_1 = require("../decorators/cookie_getter.decorator");
const checkCode_dto_1 = require("./dto/checkCode.dto");
let ReplenishWalletController = class ReplenishWalletController {
    constructor(replenishWalletService) {
        this.replenishWalletService = replenishWalletService;
    }
    create(createReplenishWalletDto, id, res) {
        return this.replenishWalletService.create(createReplenishWalletDto, id, res);
    }
    checkCode(checkCodeDto, codeReader) {
        return this.replenishWalletService.checkCode(codeReader, checkCodeDto);
    }
};
exports.ReplenishWalletController = ReplenishWalletController;
__decorate([
    (0, common_1.Post)(':id/add'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_replenish_wallet_dto_1.CreateReplenishWalletDto, Number, Object]),
    __metadata("design:returntype", void 0)
], ReplenishWalletController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/check-code'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, cookie_getter_decorator_1.Cookiegetter)('code_transaction')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [checkCode_dto_1.CheckCodeDto, String]),
    __metadata("design:returntype", void 0)
], ReplenishWalletController.prototype, "checkCode", null);
exports.ReplenishWalletController = ReplenishWalletController = __decorate([
    (0, common_1.Controller)('replenish-wallet'),
    __metadata("design:paramtypes", [replenish_wallet_service_1.ReplenishWalletService])
], ReplenishWalletController);
//# sourceMappingURL=replenish_wallet.controller.js.map