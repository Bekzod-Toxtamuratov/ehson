import { PartialType } from '@nestjs/mapped-types';
import { CreateEhsonInfoDto } from './create-ehson_info.dto';

export class UpdateEhsonInfoDto extends PartialType(CreateEhsonInfoDto) {}
