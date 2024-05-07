import { ApiProperty, ApiTags } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Social } from '../../social/entities/social.entity';
import { Distributor } from '../../distributors/entities/distributor.entity';

@ApiTags('social-distributor')
@Entity('social_distributor')
export class SocialDistributor {
  @ApiProperty({ example: 1, description: "Social Distributor's ID" })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 1, description: 'Social ID' })
  @ManyToOne(() => Social, (soc) => soc.id)
  @JoinColumn({ name: 'social_id' })
  social_id: Social;

  @ApiProperty({ example: 1, description: 'Distributor ID' })
  @ManyToOne(() => Distributor, (dist) => dist.id)
  @JoinColumn({ name: 'distributor_id' })
  distributor_id: Distributor;

  @ApiProperty({ example: 1, description: "Social Distributor's link" })
  @Column()
  link: string;
}
