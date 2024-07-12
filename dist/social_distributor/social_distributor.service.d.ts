import { Repository } from 'typeorm';
import { SocialDistributor } from './entities/social_distributor.entity';
import { CreateSocialDistributorDto } from './dto/create-social_distributor.dto';
import { UpdateSocialDistributorDto } from './dto/update-social_distributor.dto';
export declare class SocialDistributorService {
    private readonly socialRepository;
    constructor(socialRepository: Repository<SocialDistributor>);
    create(createSocialDistributorDto: CreateSocialDistributorDto): Promise<SocialDistributor | {
        error: any;
    }>;
    findAll(): Promise<SocialDistributor[]>;
    findOne(id: number): Promise<SocialDistributor | {
        error: any;
    }>;
    update(id: number, updateSocialDistributorDto: UpdateSocialDistributorDto): Promise<SocialDistributor | {
        error: any;
    }>;
    remove(id: number): Promise<SocialDistributor[] | {
        error: any;
    }>;
}
