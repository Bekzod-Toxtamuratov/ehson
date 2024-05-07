import { ApiProperty, ApiTags } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EhsonType } from '../../ehson_type/entities/ehson_type.entity';
import { SuccessfullyCompleted } from '../../successfully_completed/entities/successfully_completed.entity';

@ApiTags('Ehson_info')
@Entity()
export class EhsonInfo {
  @ApiProperty({ example: 1, description: "Ehson_info's ID" })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: "Yo'l qurilishi", description: "Ehson_info's name" })
  @Column()
  name: string;

  @ApiProperty({
    example: '23000000',
    description: "Ehson_info's needed_amount",
  })
  @Column()
  needed_amount: string;

  @ApiProperty({ description: "Ehson_info's description" })
  @Column()
  description: string;

  @ApiProperty({ description: "Ehson_info's image" })
  @Column()
  image: string;

  @ApiProperty({ description: "Ehson_info's status" })
  @Column()
  status: string;

  @ApiProperty({ description: "Ehson_info's created date" })
  @Column()
  date: Date;

  @ApiProperty({ description: 'EhsonType entity associated with EhsonInfo' })
  @ManyToOne(() => EhsonType, (ehsonType) => ehsonType.info)
  @JoinColumn({ name: 'ehson_type_id' })
  ehsontype: EhsonType;

  @ApiProperty({
    description: 'Successfully completed events associated with Ehson',
  })
  @OneToMany(
    () => SuccessfullyCompleted,
    (successfullyCompleted) => successfullyCompleted.ehson,
  )
  successfullyCompleted: SuccessfullyCompleted[];
}
