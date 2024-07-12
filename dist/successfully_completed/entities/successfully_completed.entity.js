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
exports.SuccessfullyCompleted = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const ehson_info_entity_1 = require("../../ehson_info/entities/ehson_info.entity");
const distributor_entity_1 = require("../../distributors/entities/distributor.entity");
let SuccessfullyCompleted = class SuccessfullyCompleted {
};
exports.SuccessfullyCompleted = SuccessfullyCompleted;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Success ID' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SuccessfullyCompleted.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date of the event' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], SuccessfullyCompleted.prototype, "date_event", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Amount spent for the event' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SuccessfullyCompleted.prototype, "amount_spent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Ehson ID' }),
    (0, typeorm_1.ManyToOne)(() => ehson_info_entity_1.EhsonInfo, (ehson) => ehson.successfullyCompleted),
    (0, typeorm_1.JoinColumn)({ name: 'ehson_id' }),
    __metadata("design:type", ehson_info_entity_1.EhsonInfo)
], SuccessfullyCompleted.prototype, "ehson", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Distributor ID' }),
    (0, typeorm_1.ManyToOne)(() => distributor_entity_1.Distributor, (distributor) => distributor.successfullyCompleted),
    (0, typeorm_1.JoinColumn)({ name: 'distributor_id' }),
    __metadata("design:type", distributor_entity_1.Distributor)
], SuccessfullyCompleted.prototype, "distributor", void 0);
exports.SuccessfullyCompleted = SuccessfullyCompleted = __decorate([
    (0, swagger_1.ApiTags)('Successfully_completed'),
    (0, typeorm_1.Entity)()
], SuccessfullyCompleted);
//# sourceMappingURL=successfully_completed.entity.js.map