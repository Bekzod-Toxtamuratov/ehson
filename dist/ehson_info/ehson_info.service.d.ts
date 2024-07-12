import { Repository } from 'typeorm';
import { EhsonInfo } from './entities/ehson_info.entity';
import { CreateEhsonInfoDto } from './dto/create-ehson_info.dto';
import { UpdateEhsonInfoDto } from './dto/update-ehson_info.dto';
export declare class EhsonInfoService {
    private readonly ehsonInfoRepository;
    constructor(ehsonInfoRepository: Repository<EhsonInfo>);
    create(createEhsonInfoDto: CreateEhsonInfoDto): Promise<EhsonInfo | {
        error: any;
    }>;
    findAll(): Promise<EhsonInfo[]>;
    findOne(id: number): Promise<EhsonInfo | {
        error: any;
    }>;
    update(id: number, updateEhsonInfoDto: UpdateEhsonInfoDto): Promise<EhsonInfo | {
        error: any;
    }>;
    remove(id: number): Promise<EhsonInfo[] | {
        error: any;
    }>;
}
