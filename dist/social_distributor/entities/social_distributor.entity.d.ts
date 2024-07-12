import { Social } from '../../social/entities/social.entity';
import { Distributor } from '../../distributors/entities/distributor.entity';
export declare class SocialDistributor {
    id: number;
    social_id: Social;
    distributor_id: Distributor;
    link: string;
}
