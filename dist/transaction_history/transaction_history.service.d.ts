import { Repository } from 'typeorm';
import { TransactionHistory } from './entities/transaction_history.entity';
import { CreateTransactionHistoryDto } from './dto/create-transaction_history.dto';
import { UpdateTransactionHistoryDto } from './dto/update-transaction_history.dto';
export declare class TransactionHistoryService {
    private readonly transactionHistoryRepository;
    constructor(transactionHistoryRepository: Repository<TransactionHistory>);
    create(createTransactionHistoryDto: CreateTransactionHistoryDto): Promise<TransactionHistory | {
        error: any;
    }>;
    findAll(): Promise<TransactionHistory[]>;
    findOne(id: number): Promise<TransactionHistory | {
        error: any;
    }>;
    update(id: number, updateTransactionHistoryDto: UpdateTransactionHistoryDto): Promise<TransactionHistory | {
        error: any;
    }>;
    remove(id: number): Promise<TransactionHistory[] | {
        error: any;
    }>;
}
