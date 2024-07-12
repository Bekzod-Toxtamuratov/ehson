import { SocialDistributorService } from './social_distributor.service';
import { CreateSocialDistributorDto } from './dto/create-social_distributor.dto';
import { UpdateSocialDistributorDto } from './dto/update-social_distributor.dto';
export declare class SocialDistributorController {
    private readonly socialDistributorService;
    constructor(socialDistributorService: SocialDistributorService);
    create(createSocialDistributorDto: CreateSocialDistributorDto): Promise<import("./entities/social_distributor.entity").SocialDistributor | {
        error: any;
    }>;
    findAll(): Promise<import("./entities/social_distributor.entity").SocialDistributor[]>;
    findOne(id: string): Promise<import("./entities/social_distributor.entity").SocialDistributor | {
        error: any;
    }>;
    update(id: string, updateSocialDistributorDto: UpdateSocialDistributorDto): Promise<import("./entities/social_distributor.entity").SocialDistributor | {
        error: any;
    }>;
    remove(id: string): Promise<import("./entities/social_distributor.entity").SocialDistributor[] | {
        error: any;
    }>;
}
