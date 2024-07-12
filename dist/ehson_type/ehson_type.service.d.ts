import { EhsonType } from "./entities/ehson_type.entity";
import { Repository } from "typeorm";
import { CreateEhsonTypeDto } from "./dto/create-ehson_type.dto";
import { UpdateEhsonTypeDto } from "./dto/update-ehson_type.dto";
export declare class EhsonTypesService {
    private readonly ehsonTypeRepository;
    constructor(ehsonTypeRepository: Repository<EhsonType>);
    create(createEhsonTypeDto: CreateEhsonTypeDto): Promise<EhsonType | {
        error: any;
    }>;
    findAll(): Promise<EhsonType[]>;
    findOne(id: number): Promise<EhsonType | {
        error: any;
    }>;
    update(id: number, updateEhsonTypeDto: UpdateEhsonTypeDto): Promise<EhsonType | {
        error: any;
    }>;
    remove(id: number): Promise<EhsonType[] | {
        error: any;
    }>;
}
