import { TransactionHistory } from '../../transaction_history/entities/transaction_history.entity';
import { UserCard } from '../../user_cards/entities/user_card.entity';
import { EhsonType } from '../../ehson_type/entities/ehson_type.entity';
export declare class Wallet {
    id: number;
    user_cards_id: UserCard;
    balance: number;
    withdraw_amount: string;
    withdraw_days: string;
    ehson_type_id: EhsonType;
    transaction_history: TransactionHistory[];
}
