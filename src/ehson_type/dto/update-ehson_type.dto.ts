import { PartialType } from '@nestjs/swagger';
import { CreateEhsonTypeDto } from './create-ehson_type.dto';

export class UpdateEhsonTypeDto extends PartialType(CreateEhsonTypeDto) {}
