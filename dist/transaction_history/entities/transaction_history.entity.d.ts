import { Wallet } from '../../wallet/entities/wallet.entity';
export declare class TransactionHistory {
    id: number;
    wallet_id: Wallet;
    amount: string;
    type: string;
    date: Date;
}
