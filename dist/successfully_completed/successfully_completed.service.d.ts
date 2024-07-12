import { Repository } from 'typeorm';
import { SuccessfullyCompleted } from './entities/successfully_completed.entity';
import { CreateSuccessfullyCompletedDto } from './dto/create-successfully_completed.dto';
import { UpdateSuccessfullyCompletedDto } from './dto/update-successfully_completed.dto';
export declare class SuccessfullyCompletedService {
    private readonly successfullyCompletedRepository;
    constructor(successfullyCompletedRepository: Repository<SuccessfullyCompleted>);
    create(createSuccessfullyCompletedDto: CreateSuccessfullyCompletedDto): Promise<SuccessfullyCompleted | {
        error: any;
    }>;
    findAll(): Promise<SuccessfullyCompleted[]>;
    findOne(id: number): Promise<SuccessfullyCompleted | {
        error: any;
    }>;
    update(id: number, updateSuccessfullyCompletedDto: UpdateSuccessfullyCompletedDto): Promise<SuccessfullyCompleted | {
        error: any;
    }>;
    remove(id: number): Promise<SuccessfullyCompleted[] | {
        error: any;
    }>;
}
