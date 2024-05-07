import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletController } from './wallet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wallet } from './entities/wallet.entity';
import { UserCard } from '../user_cards/entities/user_card.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Wallet, UserCard])],
  controllers: [WalletController],
  providers: [WalletService],
})
export class WalletModule {}
