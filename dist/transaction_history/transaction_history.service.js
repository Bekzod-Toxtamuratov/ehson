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
exports.TransactionHistoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const transaction_history_entity_1 = require("./entities/transaction_history.entity");
let TransactionHistoryService = class TransactionHistoryService {
    constructor(transactionHistoryRepository) {
        this.transactionHistoryRepository = transactionHistoryRepository;
    }
    async create(createTransactionHistoryDto) {
        try {
            const transactionHistory = this.transactionHistoryRepository.create(createTransactionHistoryDto);
            return this.transactionHistoryRepository.save(transactionHistory);
        }
        catch (e) {
            return { error: e.message };
        }
    }
    async findAll() {
        return this.transactionHistoryRepository.find({ relations: ['wallet_id'] });
    }
    async findOne(id) {
        try {
            const transactionHistory = await this.transactionHistoryRepository.findOne({
                where: { id },
            });
            if (!transactionHistory) {
                throw new common_1.NotFoundException(`TransactionHistory with ID ${id} not found`);
            }
            return transactionHistory;
        }
        catch (e) {
            return { error: e.message };
        }
    }
    async update(id, updateTransactionHistoryDto) {
        try {
            await this.transactionHistoryRepository.update({ id }, updateTransactionHistoryDto);
            return this.findOne(id);
        }
        catch (e) {
            return { error: e.message };
        }
    }
    async remove(id) {
        const transactionHistoryToRemove = await this.findOne(id);
        if ('error' in transactionHistoryToRemove) {
            return transactionHistoryToRemove;
        }
        return this.transactionHistoryRepository.remove([
            transactionHistoryToRemove,
        ]);
    }
};
exports.TransactionHistoryService = TransactionHistoryService;
exports.TransactionHistoryService = TransactionHistoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(transaction_history_entity_1.TransactionHistory)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TransactionHistoryService);
//# sourceMappingURL=transaction_history.service.js.map