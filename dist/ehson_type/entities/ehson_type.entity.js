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
exports.EhsonType = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const ehson_info_entity_1 = require("../../ehson_info/entities/ehson_info.entity");
const wallet_entity_1 = require("../../wallet/entities/wallet.entity");
let EhsonType = class EhsonType {
};
exports.EhsonType = EhsonType;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Entity ID' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], EhsonType.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Daraxt ekish',
        description: 'name of the Ehson type',
    }),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], EhsonType.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'description of the Ehson type' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EhsonType.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'EhsonInfo entities associated with EhsonType' }),
    (0, typeorm_1.OneToMany)(() => ehson_info_entity_1.EhsonInfo, (ehsonInfo) => ehsonInfo.ehsontype),
    __metadata("design:type", Array)
], EhsonType.prototype, "info", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Wallet entities associated with Transaction History',
    }),
    (0, typeorm_1.OneToMany)(() => wallet_entity_1.Wallet, (wallet) => wallet.ehson_type_id),
    __metadata("design:type", Array)
], EhsonType.prototype, "wallet", void 0);
exports.EhsonType = EhsonType = __decorate([
    (0, swagger_1.ApiTags)('Ehson_type'),
    (0, typeorm_1.Entity)()
], EhsonType);
//# sourceMappingURL=ehson_type.entity.js.map