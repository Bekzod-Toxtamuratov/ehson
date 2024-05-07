import { Module } from '@nestjs/common';
import { UserCardsService } from './user_cards.service';
import { UserCardsController } from './user_cards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserCard } from './entities/user_card.entity';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { Wallet } from '../wallet/entities/wallet.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([UserCard, Wallet]),
    JwtModule.register({}),
  ],
  controllers: [UserCardsController],
  providers: [UserCardsService, JwtService],
})
export class UserCardsModule {}
