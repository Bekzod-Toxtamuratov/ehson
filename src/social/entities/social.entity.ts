import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SocialDistributor } from '../../social_distributor/entities/social_distributor.entity';
@ApiTags('social')
@Entity()
export class Social {
  @ApiProperty({ description: 'Social ID' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Social name' })
  @Column()
  name: string;

  @ApiProperty({ description: 'Social logo' })
  @Column()
  logo: string;

  @ApiProperty({ description: 'EhsonInfo entities associated with EhsonType' })
  @OneToMany(() => SocialDistributor, (join) => join.social_id)
  social: SocialDistributor[];
}
