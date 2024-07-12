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
exports.TransactionHistoryController = void 0;
const common_1 = require("@nestjs/common");
const transaction_history_service_1 = require("./transaction_history.service");
const create_transaction_history_dto_1 = require("./dto/create-transaction_history.dto");
const update_transaction_history_dto_1 = require("./dto/update-transaction_history.dto");
const swagger_1 = require("@nestjs/swagger");
const admin_guard_1 = require("../guards/admin.guard");
let TransactionHistoryController = class TransactionHistoryController {
    constructor(transactionHistoryService) {
        this.transactionHistoryService = transactionHistoryService;
    }
    create(createTransactionHistoryDto) {
        return this.transactionHistoryService.create(createTransactionHistoryDto);
    }
    findAll() {
        return this.transactionHistoryService.findAll();
    }
    findOne(id) {
        return this.transactionHistoryService.findOne(+id);
    }
    update(id, updateTransactionHistoryDto) {
        return this.transactionHistoryService.update(+id, updateTransactionHistoryDto);
    }
    remove(id) {
        return this.transactionHistoryService.remove(+id);
    }
};
exports.TransactionHistoryController = TransactionHistoryController;
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_transaction_history_dto_1.CreateTransactionHistoryDto]),
    __metadata("design:returntype", void 0)
], TransactionHistoryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TransactionHistoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TransactionHistoryController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_transaction_history_dto_1.UpdateTransactionHistoryDto]),
    __metadata("design:returntype", void 0)
], TransactionHistoryController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TransactionHistoryController.prototype, "remove", null);
exports.TransactionHistoryController = TransactionHistoryController = __decorate([
    (0, swagger_1.ApiTags)('transaction-history'),
    (0, common_1.Controller)('transaction-history'),
    __metadata("design:paramtypes", [transaction_history_service_1.TransactionHistoryService])
], TransactionHistoryController);
//# sourceMappingURL=transaction_history.controller.js.map