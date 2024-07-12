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
exports.SuccessfullyCompletedService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const successfully_completed_entity_1 = require("./entities/successfully_completed.entity");
let SuccessfullyCompletedService = class SuccessfullyCompletedService {
    constructor(successfullyCompletedRepository) {
        this.successfullyCompletedRepository = successfullyCompletedRepository;
    }
    async create(createSuccessfullyCompletedDto) {
        try {
            const successfullyCompleted = this.successfullyCompletedRepository.create(createSuccessfullyCompletedDto);
            return this.successfullyCompletedRepository.save(successfullyCompleted);
        }
        catch (e) {
            return { error: e.message };
        }
    }
    async findAll() {
        return this.successfullyCompletedRepository.find({
            relations: ['distributor', 'ehson'],
        });
    }
    async findOne(id) {
        try {
            const successfullyCompleted = await this.successfullyCompletedRepository.findOne({
                where: { id },
            });
            if (!successfullyCompleted) {
                throw new common_1.NotFoundException(`SuccessfullyCompleted with ID ${id} not found`);
            }
            return successfullyCompleted;
        }
        catch (e) {
            return { error: e.message };
        }
    }
    async update(id, updateSuccessfullyCompletedDto) {
        try {
            await this.successfullyCompletedRepository.update({ id }, updateSuccessfullyCompletedDto);
            return this.findOne(id);
        }
        catch (e) {
            return { error: e.message };
        }
    }
    async remove(id) {
        const successfullyCompletedToRemove = await this.findOne(id);
        if ('error' in successfullyCompletedToRemove) {
            return successfullyCompletedToRemove;
        }
        return this.successfullyCompletedRepository.remove([
            successfullyCompletedToRemove,
        ]);
    }
};
exports.SuccessfullyCompletedService = SuccessfullyCompletedService;
exports.SuccessfullyCompletedService = SuccessfullyCompletedService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(successfully_completed_entity_1.SuccessfullyCompleted)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SuccessfullyCompletedService);
//# sourceMappingURL=successfully_completed.service.js.map