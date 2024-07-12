import { EhsonTypesService } from './ehson_type.service';
import { CreateEhsonTypeDto } from './dto/create-ehson_type.dto';
import { UpdateEhsonTypeDto } from './dto/update-ehson_type.dto';
export declare class EhsonTypeController {
    private readonly ehsonTypeService;
    constructor(ehsonTypeService: EhsonTypesService);
    create(createEhsonTypeDto: CreateEhsonTypeDto): Promise<import("./entities/ehson_type.entity").EhsonType | {
        error: any;
    }>;
    findAll(): Promise<import("./entities/ehson_type.entity").EhsonType[]>;
    findOne(id: string): Promise<import("./entities/ehson_type.entity").EhsonType | {
        error: any;
    }>;
    update(id: string, updateEhsonTypeDto: UpdateEhsonTypeDto): Promise<import("./entities/ehson_type.entity").EhsonType | {
        error: any;
    }>;
    remove(id: string): Promise<import("./entities/ehson_type.entity").EhsonType[] | {
        error: any;
    }>;
}
