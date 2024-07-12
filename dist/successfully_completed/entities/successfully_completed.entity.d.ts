import { EhsonInfo } from '../../ehson_info/entities/ehson_info.entity';
import { Distributor } from '../../distributors/entities/distributor.entity';
export declare class SuccessfullyCompleted {
    id: number;
    date_event: Date;
    amount_spent: string;
    ehson: EhsonInfo;
    distributor: Distributor;
}
