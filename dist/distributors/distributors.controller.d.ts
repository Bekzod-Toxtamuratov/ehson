import { DistributorsService } from './distributors.service';
import { CreateDistributorDto } from './dto/create-distributor.dto';
import { UpdateDistributorDto } from './dto/update-distributor.dto';
export declare class DistributorsController {
    private readonly distributorsService;
    constructor(distributorsService: DistributorsService);
    create(createDistributorDto: CreateDistributorDto): Promise<import("./entities/distributor.entity").Distributor | {
        error: any;
    }>;
    findAll(): Promise<import("./entities/distributor.entity").Distributor[]>;
    findOne(id: string): Promise<import("./entities/distributor.entity").Distributor | {
        error: any;
    }>;
    update(id: string, updateDistributorDto: UpdateDistributorDto): Promise<import("./entities/distributor.entity").Distributor | {
        error: any;
    }>;
    remove(id: string): Promise<import("./entities/distributor.entity").Distributor[] | {
        error: any;
    }>;
}
