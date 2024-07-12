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
exports.Social = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const social_distributor_entity_1 = require("../../social_distributor/entities/social_distributor.entity");
let Social = class Social {
};
exports.Social = Social;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Social ID' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Social.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Social name' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Social.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Social logo' }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Social.prototype, "logo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'EhsonInfo entities associated with EhsonType' }),
    (0, typeorm_1.OneToMany)(() => social_distributor_entity_1.SocialDistributor, (join) => join.social_id),
    __metadata("design:type", Array)
], Social.prototype, "social", void 0);
exports.Social = Social = __decorate([
    (0, swagger_1.ApiTags)('social'),
    (0, typeorm_1.Entity)()
], Social);
//# sourceMappingURL=social.entity.js.map