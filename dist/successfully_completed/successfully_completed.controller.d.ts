import { SuccessfullyCompletedService } from './successfully_completed.service';
import { CreateSuccessfullyCompletedDto } from './dto/create-successfully_completed.dto';
import { UpdateSuccessfullyCompletedDto } from './dto/update-successfully_completed.dto';
export declare class SuccessfullyCompletedController {
    private readonly successfullyCompletedService;
    constructor(successfullyCompletedService: SuccessfullyCompletedService);
    create(createSuccessfullyCompletedDto: CreateSuccessfullyCompletedDto): Promise<import("./entities/successfully_completed.entity").SuccessfullyCompleted | {
        error: any;
    }>;
    findAll(): Promise<import("./entities/successfully_completed.entity").SuccessfullyCompleted[]>;
    findOne(id: string): Promise<import("./entities/successfully_completed.entity").SuccessfullyCompleted | {
        error: any;
    }>;
    update(id: string, updateSuccessfullyCompletedDto: UpdateSuccessfullyCompletedDto): Promise<import("./entities/successfully_completed.entity").SuccessfullyCompleted | {
        error: any;
    }>;
    remove(id: string): Promise<import("./entities/successfully_completed.entity").SuccessfullyCompleted[] | {
        error: any;
    }>;
}
