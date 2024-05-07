import { ApiProperty, ApiTags } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Wallet } from '../../wallet/entities/wallet.entity';

ApiTags('user_cards');
@Entity()
export class UserCard {
  @ApiProperty({ example: 1, description: 'Card ID' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 1, description: 'User ID' })
  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user_id: any;

  @ApiProperty({ example: '986019010206926', description: 'Card number' })
  @Column({ unique: true })
  card_number: string;

  @ApiProperty({
    example: '2023-02-02',
    description: 'Card number expire date',
  })
  @Column()
  expire_date: Date;

  @ApiProperty({ description: 'Card balance' })
  @Column({ nullable: true })
  balance: number;

  @ApiProperty({ example: true, description: 'if user_card is main' })
  @Column()
  is_main: boolean;

  @ApiProperty({
    description: 'Wallet entities associated with Transaction History',
  })
  @OneToMany(() => Wallet, (wallet) => wallet.user_cards_id)
  wallet: Wallet[];
}
