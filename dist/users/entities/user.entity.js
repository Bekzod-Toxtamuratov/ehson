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
exports.User = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const user_card_entity_1 = require("../../user_cards/entities/user_card.entity");
let User = class User {
};
exports.User = User;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'User ID' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Muhammadjon Ubaydullayev',
        description: "User's full_name",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "full_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '+998901006706', description: "User's phone number" }),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'user@gmail.com',
        description: "User's email",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'kjnuied8934h90f387489734bf3f7b73f',
        description: "User's refresh token",
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "refreshToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "User's activeness" }),
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], User.prototype, "is_ative", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'hell0w0r1d',
        description: "User's password",
    }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Code to accept transaction' }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "User's join with user_cards" }),
    (0, typeorm_1.OneToMany)(() => user_card_entity_1.UserCard, (card) => card.user_id),
    __metadata("design:type", Array)
], User.prototype, "user", void 0);
exports.User = User = __decorate([
    (0, swagger_1.ApiTags)('users'),
    (0, typeorm_1.Entity)()
], User);
//# sourceMappingURL=user.entity.js.map