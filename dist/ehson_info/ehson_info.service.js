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
exports.EhsonInfoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const ehson_info_entity_1 = require("./entities/ehson_info.entity");
let EhsonInfoService = class EhsonInfoService {
    constructor(ehsonInfoRepository) {
        this.ehsonInfoRepository = ehsonInfoRepository;
    }
    async create(createEhsonInfoDto) {
        try {
            const ehsonInfo = this.ehsonInfoRepository.create(createEhsonInfoDto);
            return this.ehsonInfoRepository.save(ehsonInfo);
        }
        catch (e) {
            return { error: e.message };
        }
    }
    async findAll() {
        return this.ehsonInfoRepository.find({ relations: ['ehsontype'] });
    }
    async findOne(id) {
        try {
            const ehsonInfo = await this.ehsonInfoRepository.findOne({
                where: { id },
            });
            if (!ehsonInfo) {
                throw new common_1.NotFoundException(`EhsonInfo with ID ${id} not found`);
            }
            return ehsonInfo;
        }
        catch (e) {
            return { error: e.message };
        }
    }
    async update(id, updateEhsonInfoDto) {
        try {
            await this.ehsonInfoRepository.update({ id }, updateEhsonInfoDto);
            return this.findOne(id);
        }
        catch (e) {
            return { error: e.message };
        }
    }
    async remove(id) {
        const ehsonInfoToRemove = await this.findOne(id);
        if ('error' in ehsonInfoToRemove) {
            return ehsonInfoToRemove;
        }
        return this.ehsonInfoRepository.remove([ehsonInfoToRemove]);
    }
};
exports.EhsonInfoService = EhsonInfoService;
exports.EhsonInfoService = EhsonInfoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ehson_info_entity_1.EhsonInfo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EhsonInfoService);
//# sourceMappingURL=ehson_info.service.js.map