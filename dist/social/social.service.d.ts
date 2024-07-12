import { Repository } from 'typeorm';
import { Social } from './entities/social.entity';
import { CreateSocialDto } from './dto/create-social.dto';
import { UpdateSocialDto } from './dto/update-social.dto';
export declare class SocialService {
    private readonly socialRepository;
    constructor(socialRepository: Repository<Social>);
    create(createSocialDto: CreateSocialDto): Promise<Social | {
        error: any;
    }>;
    findAll(): Promise<Social[]>;
    findOne(id: number): Promise<Social | {
        error: any;
    }>;
    update(id: number, updateSocialDto: UpdateSocialDto): Promise<Social | {
        error: any;
    }>;
    remove(id: number): Promise<Social[] | {
        error: any;
    }>;
}
