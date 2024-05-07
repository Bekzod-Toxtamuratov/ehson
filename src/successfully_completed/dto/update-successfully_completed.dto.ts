import { PartialType } from '@nestjs/mapped-types';
import { CreateSuccessfullyCompletedDto } from './create-successfully_completed.dto';

export class UpdateSuccessfullyCompletedDto extends PartialType(CreateSuccessfullyCompletedDto) {}
