import { Repository } from 'typeorm';
import { Distributor } from './entities/distributor.entity';
import { CreateDistributorDto } from './dto/create-distributor.dto';
import { UpdateDistributorDto } from './dto/update-distributor.dto';
export declare class DistributorsService {
    private readonly distributorRepository;
    constructor(distributorRepository: Repository<Distributor>);
    create(createDistributorDto: CreateDistributorDto): Promise<Distributor | {
        error: any;
    }>;
    findAll(): Promise<Distributor[]>;
    findOne(id: number): Promise<Distributor | {
        error: any;
    }>;
    update(id: number, updateDistributorDto: UpdateDistributorDto): Promise<Distributor | {
        error: any;
    }>;
    remove(id: number): Promise<Distributor[] | {
        error: any;
    }>;
}
