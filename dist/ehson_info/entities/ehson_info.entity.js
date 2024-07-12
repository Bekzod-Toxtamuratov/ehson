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
exports.EhsonInfo = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const ehson_type_entity_1 = require("../../ehson_type/entities/ehson_type.entity");
const successfully_completed_entity_1 = require("../../successfully_completed/entities/successfully_completed.entity");
let EhsonInfo = class EhsonInfo {
};
exports.EhsonInfo = EhsonInfo;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "Ehson_info's ID" }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], EhsonInfo.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Yo'l qurilishi", description: "Ehson_info's name" }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EhsonInfo.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '23000000',
        description: "Ehson_info's needed_amount",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EhsonInfo.prototype, "needed_amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Ehson_info's description" }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EhsonInfo.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Ehson_info's image" }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EhsonInfo.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Ehson_info's status" }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EhsonInfo.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Ehson_info's created date" }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], EhsonInfo.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'EhsonType entity associated with EhsonInfo' }),
    (0, typeorm_1.ManyToOne)(() => ehson_type_entity_1.EhsonType, (ehsonType) => ehsonType.info),
    (0, typeorm_1.JoinColumn)({ name: 'ehson_type_id' }),
    __metadata("design:type", ehson_type_entity_1.EhsonType)
], EhsonInfo.prototype, "ehsontype", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Successfully completed events associated with Ehson',
    }),
    (0, typeorm_1.OneToMany)(() => successfully_completed_entity_1.SuccessfullyCompleted, (successfullyCompleted) => successfullyCompleted.ehson),
    __metadata("design:type", Array)
], EhsonInfo.prototype, "successfullyCompleted", void 0);
exports.EhsonInfo = EhsonInfo = __decorate([
    (0, swagger_1.ApiTags)('Ehson_info'),
    (0, typeorm_1.Entity)()
], EhsonInfo);
//# sourceMappingURL=ehson_info.entity.js.map