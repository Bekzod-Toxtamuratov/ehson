"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplenishWalletModule = void 0;
const common_1 = require("@nestjs/common");
const replenish_wallet_service_1 = require("./replenish_wallet.service");
const replenish_wallet_controller_1 = require("./replenish_wallet.controller");
const typeorm_1 = require("@nestjs/typeorm");
const user_card_entity_1 = require("../user_cards/entities/user_card.entity");
const wallet_entity_1 = require("../wallet/entities/wallet.entity");
const user_entity_1 = require("../users/entities/user.entity");
const jwt_1 = require("@nestjs/jwt");
const mail_module_1 = require("../mail/mail.module");
let ReplenishWalletModule = class ReplenishWalletModule {
};
exports.ReplenishWalletModule = ReplenishWalletModule;
exports.ReplenishWalletModule = ReplenishWalletModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_card_entity_1.UserCard]),
            typeorm_1.TypeOrmModule.forFeature([wallet_entity_1.Wallet]),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]),
            mail_module_1.MailModule,
        ],
        controllers: [replenish_wallet_controller_1.ReplenishWalletController],
        providers: [replenish_wallet_service_1.ReplenishWalletService, jwt_1.JwtService],
    })
], ReplenishWalletModule);
//# sourceMappingURL=replenish_wallet.module.js.map