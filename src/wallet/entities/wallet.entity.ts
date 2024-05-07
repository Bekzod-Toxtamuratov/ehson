import { ApiProperty, ApiTags } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TransactionHistory } from '../../transaction_history/entities/transaction_history.entity';
import { UserCard } from '../../user_cards/entities/user_card.entity';
import { EhsonType } from '../../ehson_type/entities/ehson_type.entity';

@ApiTags('wallet')
@Entity()
export class Wallet {
  @ApiProperty({ description: 'wallet ID' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 1, description: 'User Card ID' })
  @ManyToOne(() => UserCard, (card) => card.id)
  @JoinColumn({ name: 'user_cards_id' })
  user_cards_id: UserCard;

  @ApiProperty({ description: 'Wallet balance' })
  @Column({ nullable: true })
  balance: number;

  @ApiProperty({
    description: 'Wallet amount',
    enum: ['1000', '3000', '5000', '10000', '30000', '50000'],
  })
  @Column()
  withdraw_amount: string;

  @ApiProperty({
    description: 'Withraw days',
    enum: ['Dushanba', 'Juma', 'Payshanba'],
  })
  @Column()
  withdraw_days: string;

  @ApiProperty({ example: 1, description: 'Ehson Type ID' })
  @ManyToOne(() => EhsonType, (type) => type.id)
  @JoinColumn({ name: 'ehson_type_id' })
  ehson_type_id: EhsonType;

  @ApiProperty({
    description: 'Wallet entities associated with Transaction History',
  })
  @OneToMany(() => TransactionHistory, (history) => history.wallet_id)
  transaction_history: TransactionHistory[];
}
