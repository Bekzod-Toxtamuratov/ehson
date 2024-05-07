import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { EhsonInfoModule } from './ehson_info/ehson_info.module';
import { SuccessfullyCompletedModule } from './successfully_completed/successfully_completed.module';
import { AdminModule } from './admin/admin.module';
import { DistributorsModule } from './distributors/distributors.module';
import { Admin } from './admin/entities/admin.entity';
import { Distributor } from './distributors/entities/distributor.entity';
import { WalletModule } from './wallet/wallet.module';
import { UserCardsModule } from './user_cards/user_cards.module';
import { TransactionHistoryModule } from './transaction_history/transaction_history.module';
import { EhsonTypeModule } from './ehson_type/ehson_type.module';
import { SocialModule } from './social/social.module';
import { EhsonInfo } from './ehson_info/entities/ehson_info.entity';
import { EhsonType } from './ehson_type/entities/ehson_type.entity';
import { Social } from './social/entities/social.entity';
import { SuccessfullyCompleted } from './successfully_completed/entities/successfully_completed.entity';
import { UserCard } from './user_cards/entities/user_card.entity';
import { User } from './users/entities/user.entity';
import { Wallet } from './wallet/entities/wallet.entity';
import { TransactionHistory } from './transaction_history/entities/transaction_history.entity';
import { SocialDistributorModule } from './social_distributor/social_distributor.module';
import { SocialDistributor } from './social_distributor/entities/social_distributor.entity';
import { ReplenishWalletModule } from './replenish_wallet/replenish_wallet.module';
// import { ReplenishWalletModule } from './replenish_wallet/replenish_wallet.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [
        Admin,
        Distributor,
        EhsonInfo,
        EhsonType,
        Social,
        SuccessfullyCompleted,
        UserCard,
        User,
        Wallet,
        TransactionHistory,
        SocialDistributor,
      ],
      synchronize: true,
      logging: false,
    }),
    UsersModule,
    EhsonInfoModule,
    SuccessfullyCompletedModule,
    AdminModule,
    DistributorsModule,
    WalletModule,
    UserCardsModule,
    TransactionHistoryModule,
    EhsonTypeModule,
    SocialModule,
    SocialDistributorModule,
    ReplenishWalletModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
