import { ApiProperty, ApiTags } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Wallet } from '../../wallet/entities/wallet.entity';

@ApiTags('transaction_history')
@Entity()
export class TransactionHistory {
  @ApiProperty({ example: 1, description: 'Transaction ID' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Wallet ID' })
  @ManyToOne(() => Wallet, (wallet) => wallet.id)
  @JoinColumn({ name: 'wallet_id' })
  wallet_id: Wallet;

  @ApiProperty({ example: 12300000, description: 'Amount of transaction' })
  @Column()
  amount: string;

  @ApiProperty({ example: 'kirdi', description: 'Type of transaction' })
  @Column()
  type: string;

  @ApiProperty({ example: '2023:02:02', description: 'Transaction date' })
  @Column()
  date: Date;
}
