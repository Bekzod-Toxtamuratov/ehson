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
exports.SocialDistributor = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const social_entity_1 = require("../../social/entities/social.entity");
const distributor_entity_1 = require("../../distributors/entities/distributor.entity");
let SocialDistributor = class SocialDistributor {
};
exports.SocialDistributor = SocialDistributor;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "Social Distributor's ID" }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SocialDistributor.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Social ID' }),
    (0, typeorm_1.ManyToOne)(() => social_entity_1.Social, (soc) => soc.id),
    (0, typeorm_1.JoinColumn)({ name: 'social_id' }),
    __metadata("design:type", social_entity_1.Social)
], SocialDistributor.prototype, "social_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Distributor ID' }),
    (0, typeorm_1.ManyToOne)(() => distributor_entity_1.Distributor, (dist) => dist.id),
    (0, typeorm_1.JoinColumn)({ name: 'distributor_id' }),
    __metadata("design:type", distributor_entity_1.Distributor)
], SocialDistributor.prototype, "distributor_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "Social Distributor's link" }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SocialDistributor.prototype, "link", void 0);
exports.SocialDistributor = SocialDistributor = __decorate([
    (0, swagger_1.ApiTags)('social-distributor'),
    (0, typeorm_1.Entity)('social_distributor')
], SocialDistributor);
//# sourceMappingURL=social_distributor.entity.js.map