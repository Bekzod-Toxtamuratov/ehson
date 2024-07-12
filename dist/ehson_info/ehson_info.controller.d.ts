import { EhsonInfoService } from './ehson_info.service';
import { CreateEhsonInfoDto } from './dto/create-ehson_info.dto';
import { UpdateEhsonInfoDto } from './dto/update-ehson_info.dto';
export declare class EhsonInfoController {
    private readonly ehsonInfoService;
    constructor(ehsonInfoService: EhsonInfoService);
    create(createEhsonInfoDto: CreateEhsonInfoDto): Promise<import("./entities/ehson_info.entity").EhsonInfo | {
        error: any;
    }>;
    findAll(): Promise<import("./entities/ehson_info.entity").EhsonInfo[]>;
    findOne(id: string): Promise<import("./entities/ehson_info.entity").EhsonInfo | {
        error: any;
    }>;
    update(id: string, updateEhsonInfoDto: UpdateEhsonInfoDto): Promise<import("./entities/ehson_info.entity").EhsonInfo | {
        error: any;
    }>;
    remove(id: string): Promise<import("./entities/ehson_info.entity").EhsonInfo[] | {
        error: any;
    }>;
}
