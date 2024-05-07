import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EhsonInfo } from '../../ehson_info/entities/ehson_info.entity';
import { Wallet } from '../../wallet/entities/wallet.entity';

@ApiTags('Ehson_type')
@Entity()
export class EhsonType {
  @ApiProperty({ example: 1, description: 'Entity ID' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'Daraxt ekish',
    description: 'name of the Ehson type',
  })
  @Column({ unique: true })
  name: string;

  @ApiProperty({ description: 'description of the Ehson type' })
  @Column()
  description: string;

  @ApiProperty({ description: 'EhsonInfo entities associated with EhsonType' })
  @OneToMany(() => EhsonInfo, (ehsonInfo) => ehsonInfo.ehsontype)
  info: EhsonInfo[];

  @ApiProperty({
    description: 'Wallet entities associated with Transaction History',
  })
  @OneToMany(() => Wallet, (wallet) => wallet.ehson_type_id)
  wallet: Wallet[];
}
