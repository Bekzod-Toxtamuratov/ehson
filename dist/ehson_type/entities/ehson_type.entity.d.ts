import { EhsonInfo } from '../../ehson_info/entities/ehson_info.entity';
import { Wallet } from '../../wallet/entities/wallet.entity';
export declare class EhsonType {
    id: number;
    name: string;
    description: string;
    info: EhsonInfo[];
    wallet: Wallet[];
}
