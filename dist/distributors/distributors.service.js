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
exports.DistributorsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const distributor_entity_1 = require("./entities/distributor.entity");
let DistributorsService = class DistributorsService {
    constructor(distributorRepository) {
        this.distributorRepository = distributorRepository;
    }
    async create(createDistributorDto) {
        try {
            const distributor = this.distributorRepository.create(createDistributorDto);
            return this.distributorRepository.save(distributor);
        }
        catch (e) {
            return { error: e.message };
        }
    }
    async findAll() {
        return this.distributorRepository.find();
    }
    async findOne(id) {
        try {
            const distributor = await this.distributorRepository.findOne({
                where: { id },
            });
            if (!distributor) {
                throw new common_1.NotFoundException(`Distributor with ID ${id} not found`);
            }
            return distributor;
        }
        catch (e) {
            return { error: e.message };
        }
    }
    async update(id, updateDistributorDto) {
        try {
            await this.distributorRepository.update({ id }, updateDistributorDto);
            return this.findOne(id);
        }
        catch (e) {
            return { error: e.message };
        }
    }
    async remove(id) {
        const distributorToRemove = await this.findOne(id);
        if ('error' in distributorToRemove) {
            return distributorToRemove;
        }
        return this.distributorRepository.remove([distributorToRemove]);
    }
};
exports.DistributorsService = DistributorsService;
exports.DistributorsService = DistributorsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(distributor_entity_1.Distributor)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DistributorsService);
//# sourceMappingURL=distributors.service.js.map