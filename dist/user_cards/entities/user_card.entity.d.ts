import { Wallet } from '../../wallet/entities/wallet.entity';
export declare class UserCard {
    id: number;
    user_id: any;
    card_number: string;
    expire_date: Date;
    balance: number;
    is_main: boolean;
    wallet: Wallet[];
}
