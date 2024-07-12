import { TransactionHistoryService } from './transaction_history.service';
import { CreateTransactionHistoryDto } from './dto/create-transaction_history.dto';
import { UpdateTransactionHistoryDto } from './dto/update-transaction_history.dto';
export declare class TransactionHistoryController {
    private readonly transactionHistoryService;
    constructor(transactionHistoryService: TransactionHistoryService);
    create(createTransactionHistoryDto: CreateTransactionHistoryDto): Promise<import("./entities/transaction_history.entity").TransactionHistory | {
        error: any;
    }>;
    findAll(): Promise<import("./entities/transaction_history.entity").TransactionHistory[]>;
    findOne(id: string): Promise<import("./entities/transaction_history.entity").TransactionHistory | {
        error: any;
    }>;
    update(id: string, updateTransactionHistoryDto: UpdateTransactionHistoryDto): Promise<import("./entities/transaction_history.entity").TransactionHistory | {
        error: any;
    }>;
    remove(id: string): Promise<import("./entities/transaction_history.entity").TransactionHistory[] | {
        error: any;
    }>;
}
