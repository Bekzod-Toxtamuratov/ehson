import { PartialType } from '@nestjs/swagger';
import { CreateReplenishWalletDto } from './create-replenish_wallet.dto';

export class UpdateReplenishWalletDto extends PartialType(CreateReplenishWalletDto) {}
