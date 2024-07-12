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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const social_entity_1 = require("./entities/social.entity");
let SocialService = class SocialService {
    constructor(socialRepository) {
        this.socialRepository = socialRepository;
    }
    async create(createSocialDto) {
        try {
            const social = this.socialRepository.create(createSocialDto);
            return this.socialRepository.save(social);
        }
        catch (e) {
            return { error: e.message };
        }
    }
    async findAll() {
        return this.socialRepository.find();
    }
    async findOne(id) {
        try {
            const social = await this.socialRepository.findOne({
                where: { id },
            });
            if (!social) {
                throw new common_1.NotFoundException(`Social with ID ${id} not found`);
            }
            return social;
        }
        catch (e) {
            return { error: e.message };
        }
    }
    async update(id, updateSocialDto) {
        try {
            await this.socialRepository.update({ id }, updateSocialDto);
            return this.findOne(id);
        }
        catch (e) {
            return { error: e.message };
        }
    }
    async remove(id) {
        const socialToRemove = await this.findOne(id);
        if ('error' in socialToRemove) {
            return socialToRemove;
        }
        return this.socialRepository.remove([socialToRemove]);
    }
};
exports.SocialService = SocialService;
exports.SocialService = SocialService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(social_entity_1.Social)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SocialService);
//# sourceMappingURL=social.service.js.map