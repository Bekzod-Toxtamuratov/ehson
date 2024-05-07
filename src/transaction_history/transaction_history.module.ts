import { Module } from '@nestjs/common';
import { TransactionHistoryService } from './transaction_history.service';
import { TransactionHistoryController } from './transaction_history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionHistory } from './entities/transaction_history.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([TransactionHistory]),
    JwtModule.register({}),
  ],
  controllers: [TransactionHistoryController],
  providers: [TransactionHistoryService],
})
export class TransactionHistoryModule {}
