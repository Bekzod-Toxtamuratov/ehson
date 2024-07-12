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
exports.Distributor = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const successfully_completed_entity_1 = require("../../successfully_completed/entities/successfully_completed.entity");
const social_distributor_entity_1 = require("../../social_distributor/entities/social_distributor.entity");
let Distributor = class Distributor {
};
exports.Distributor = Distributor;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "Distributor's ID" }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Distributor.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Mehrli qo'llar", description: "Distributor's name" }),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Distributor.prototype, "company_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Toshkent shahri, Shayhontohur tumani',
        description: "Distributor's address",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Distributor.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '+998951006671', description: "Distributor's phone" }),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Distributor.prototype, "phone_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'distributor@gmail.com',
        description: "Distributor's email address",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Distributor.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 2,
        description: "Distributor's working years",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Distributor.prototype, "working_years", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '28768755',
        description: "Distributor's license number",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Distributor.prototype, "license_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'jyvyuvtvyt26e353v6ety3.jpeg',
        description: "Distributor's license image",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Distributor.prototype, "license_image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Successfully completed events associated with Distributor',
    }),
    (0, typeorm_1.OneToMany)(() => successfully_completed_entity_1.SuccessfullyCompleted, (successfullyCompleted) => successfullyCompleted.distributor),
    __metadata("design:type", Array)
], Distributor.prototype, "successfullyCompleted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'EhsonInfo entities associated with EhsonType' }),
    (0, typeorm_1.OneToMany)(() => social_distributor_entity_1.SocialDistributor, (join) => join.distributor_id),
    __metadata("design:type", Array)
], Distributor.prototype, "distributor", void 0);
exports.Distributor = Distributor = __decorate([
    (0, swagger_1.ApiTags)('Admin'),
    (0, typeorm_1.Entity)()
], Distributor);
//# sourceMappingURL=distributor.entity.js.map