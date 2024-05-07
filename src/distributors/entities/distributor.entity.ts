import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SuccessfullyCompleted } from '../../successfully_completed/entities/successfully_completed.entity';
import { SocialDistributor } from '../../social_distributor/entities/social_distributor.entity';

@ApiTags('Admin')
@Entity()
export class Distributor {
  @ApiProperty({ example: 1, description: "Distributor's ID" })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: "Mehrli qo'llar", description: "Distributor's name" })
  @Column({ unique: true })
  company_name: string;

  @ApiProperty({
    example: 'Toshkent shahri, Shayhontohur tumani',
    description: "Distributor's address",
  })
  @Column()
  address: string;

  @ApiProperty({ example: '+998951006671', description: "Distributor's phone" })
  @Column({ unique: true })
  phone_number: string;

  @ApiProperty({
    example: 'distributor@gmail.com',
    description: "Distributor's email address",
  })
  @Column()
  email: string;

  @ApiProperty({
    example: 2,
    description: "Distributor's working years",
  })
  @Column()
  working_years: number;

  @ApiProperty({
    example: '28768755',
    description: "Distributor's license number",
  })
  @Column()
  license_number: string;

  @ApiProperty({
    example: 'jyvyuvtvyt26e353v6ety3.jpeg',
    description: "Distributor's license image",
  })
  @Column()
  license_image: string;

  @ApiProperty({
    description: 'Successfully completed events associated with Distributor',
  })
  @OneToMany(
    () => SuccessfullyCompleted,
    (successfullyCompleted) => successfullyCompleted.distributor,
  )
  successfullyCompleted: SuccessfullyCompleted[];

  @ApiProperty({ description: 'EhsonInfo entities associated with EhsonType' })
  @OneToMany(() => SocialDistributor, (join) => join.distributor_id)
  distributor: SocialDistributor[];
}
