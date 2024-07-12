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
exports.TransactionHistory = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const wallet_entity_1 = require("../../wallet/entities/wallet.entity");
let TransactionHistory = class TransactionHistory {
};
exports.TransactionHistory = TransactionHistory;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Transaction ID' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TransactionHistory.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Wallet ID' }),
    (0, typeorm_1.ManyToOne)(() => wallet_entity_1.Wallet, (wallet) => wallet.id),
    (0, typeorm_1.JoinColumn)({ name: 'wallet_id' }),
    __metadata("design:type", wallet_entity_1.Wallet)
], TransactionHistory.prototype, "wallet_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 12300000, description: 'Amount of transaction' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TransactionHistory.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'kirdi', description: 'Type of transaction' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TransactionHistory.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023:02:02', description: 'Transaction date' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], TransactionHistory.prototype, "date", void 0);
exports.TransactionHistory = TransactionHistory = __decorate([
    (0, swagger_1.ApiTags)('transaction_history'),
    (0, typeorm_1.Entity)()
], TransactionHistory);
//# sourceMappingURL=transaction_history.entity.js.map