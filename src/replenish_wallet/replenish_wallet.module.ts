import { Module } from '@nestjs/common';
import { ReplenishWalletService } from './replenish_wallet.service';
import { ReplenishWalletController } from './replenish_wallet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserCard } from '../user_cards/entities/user_card.entity';
import { Wallet } from '../wallet/entities/wallet.entity';
import { User } from '../users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { MailService } from '../mail/mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailModule } from '../mail/mail.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserCard]),
    TypeOrmModule.forFeature([Wallet]),
    TypeOrmModule.forFeature([User]),
    MailModule,
  ],
  controllers: [ReplenishWalletController],
  providers: [ReplenishWalletService, JwtService],
})
export class ReplenishWalletModule {}
