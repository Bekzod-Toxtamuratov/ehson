import { PartialType } from '@nestjs/swagger';
import { CreateSocialDistributorDto } from './create-social_distributor.dto';

export class UpdateSocialDistributorDto extends PartialType(CreateSocialDistributorDto) {}
