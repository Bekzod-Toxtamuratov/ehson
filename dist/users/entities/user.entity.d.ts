import { UserCard } from '../../user_cards/entities/user_card.entity';
export declare class User {
    id: number;
    full_name: string;
    phone: string;
    email: string;
    refreshToken: string;
    is_ative: boolean;
    password: string;
    code: string;
    user: UserCard[];
}
