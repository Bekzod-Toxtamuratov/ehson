import { EhsonType } from '../../ehson_type/entities/ehson_type.entity';
import { SuccessfullyCompleted } from '../../successfully_completed/entities/successfully_completed.entity';
export declare class EhsonInfo {
    id: number;
    name: string;
    needed_amount: string;
    description: string;
    image: string;
    status: string;
    date: Date;
    ehsontype: EhsonType;
    successfullyCompleted: SuccessfullyCompleted[];
}
