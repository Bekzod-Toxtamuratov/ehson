import { SuccessfullyCompleted } from '../../successfully_completed/entities/successfully_completed.entity';
import { SocialDistributor } from '../../social_distributor/entities/social_distributor.entity';
export declare class Distributor {
    id: number;
    company_name: string;
    address: string;
    phone_number: string;
    email: string;
    working_years: number;
    license_number: string;
    license_image: string;
    successfullyCompleted: SuccessfullyCompleted[];
    distributor: SocialDistributor[];
}
