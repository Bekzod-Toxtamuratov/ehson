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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const transaction_history_entity_1 = require("../../transaction_history/entities/transaction_history.entity");
const user_card_entity_1 = require("../../user_cards/entities/user_card.entity");
const ehson_type_entity_1 = require("../../ehson_type/entities/ehson_type.entity");
let Wallet = class Wallet {
};
exports.Wallet = Wallet;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'wallet ID' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Wallet.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'User Card ID' }),
    (0, typeorm_1.ManyToOne)(() => user_card_entity_1.UserCard, (card) => card.id),
    (0, typeorm_1.JoinColumn)({ name: 'user_cards_id' }),
    __metadata("design:type", user_card_entity_1.UserCard)
], Wallet.prototype, "user_cards_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Wallet balance' }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Wallet.prototype, "balance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Wallet amount',
        enum: ['1000', '3000', '5000', '10000', '30000', '50000'],
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Wallet.prototype, "withdraw_amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Withraw days',
        enum: ['Dushanba', 'Juma', 'Payshanba'],
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Wallet.prototype, "withdraw_days", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Ehson Type ID' }),
    (0, typeorm_1.ManyToOne)(() => ehson_type_entity_1.EhsonType, (type) => type.id),
    (0, typeorm_1.JoinColumn)({ name: 'ehson_type_id' }),
    __metadata("design:type", ehson_type_entity_1.EhsonType)
], Wallet.prototype, "ehson_type_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Wallet entities associated with Transaction History',
    }),
    (0, typeorm_1.OneToMany)(() => transaction_history_entity_1.TransactionHistory, (history) => history.wallet_id),
    __metadata("design:type", Array)
], Wallet.prototype, "transaction_history", void 0);
exports.Wallet = Wallet = __decorate([
    (0, swagger_1.ApiTags)('wallet'),
    (0, typeorm_1.Entity)()
], Wallet);
//# sourceMappingURL=wallet.entity.js.map