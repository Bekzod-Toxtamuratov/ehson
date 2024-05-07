import { PartialType } from '@nestjs/swagger';
import { CreateTransactionHistoryDto } from './create-transaction_history.dto';

export class UpdateTransactionHistoryDto extends PartialType(CreateTransactionHistoryDto) {}
