import { ApiProperty, ApiTags } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EhsonInfo } from '../../ehson_info/entities/ehson_info.entity';
import { Distributor } from '../../distributors/entities/distributor.entity';

@ApiTags('Successfully_completed')
@Entity()
export class SuccessfullyCompleted {
  @ApiProperty({ description: 'Success ID' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Date of the event' })
  @Column()
  date_event: Date;

  @ApiProperty({ description: 'Amount spent for the event' })
  @Column()
  amount_spent: string;

  @ApiProperty({ description: 'Ehson ID' })
  @ManyToOne(() => EhsonInfo, (ehson) => ehson.successfullyCompleted)
  @JoinColumn({ name: 'ehson_id' })
  ehson: EhsonInfo;

  @ApiProperty({ description: 'Distributor ID' })
  @ManyToOne(
    () => Distributor,
    (distributor) => distributor.successfullyCompleted,
  )
  @JoinColumn({ name: 'distributor_id' })
  distributor: Distributor;
}
