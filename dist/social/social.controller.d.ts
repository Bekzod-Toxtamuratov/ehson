import { SocialService } from './social.service';
import { CreateSocialDto } from './dto/create-social.dto';
import { UpdateSocialDto } from './dto/update-social.dto';
export declare class SocialController {
    private readonly socialService;
    constructor(socialService: SocialService);
    create(createSocialDto: CreateSocialDto): Promise<import("./entities/social.entity").Social | {
        error: any;
    }>;
    findAll(): Promise<import("./entities/social.entity").Social[]>;
    findOne(id: string): Promise<import("./entities/social.entity").Social | {
        error: any;
    }>;
    update(id: string, updateSocialDto: UpdateSocialDto): Promise<import("./entities/social.entity").Social | {
        error: any;
    }>;
    remove(id: string): Promise<import("./entities/social.entity").Social[] | {
        error: any;
    }>;
}
