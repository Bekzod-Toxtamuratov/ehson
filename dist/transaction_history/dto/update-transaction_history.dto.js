"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTransactionHistoryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_transaction_history_dto_1 = require("./create-transaction_history.dto");
class UpdateTransactionHistoryDto extends (0, swagger_1.PartialType)(create_transaction_history_dto_1.CreateTransactionHistoryDto) {
}
exports.UpdateTransactionHistoryDto = UpdateTransactionHistoryDto;
//# sourceMappingURL=update-transaction_history.dto.js.map