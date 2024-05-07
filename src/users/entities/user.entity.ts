import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserCard } from '../../user_cards/entities/user_card.entity';

@ApiTags('users')
@Entity()
export class User {
  @ApiProperty({ example: 1, description: 'User ID' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'Muhammadjon Ubaydullayev',
    description: "User's full_name",
  })
  @Column()
  full_name: string;

  @ApiProperty({ example: '+998901006706', description: "User's phone number" })
  @Column({ unique: true })
  phone: string;

  @ApiProperty({
    example: 'user@gmail.com',
    description: "User's email",
  })
  @Column()
  email: string;

  @ApiProperty({
    example: 'kjnuied8934h90f387489734bf3f7b73f',
    description: "User's refresh token",
  })
  @Column({ nullable: true })
  refreshToken: string;

  @ApiProperty({ description: "User's activeness" })
  @Column({ default: true })
  is_ative: boolean;

  @ApiProperty({
    example: 'hell0w0r1d',
    description: "User's password",
  })
  @Column()
  password: string;

  @ApiProperty({ example: 1, description: 'Code to accept transaction' })
  @Column({ nullable: true })
  code: string;

  @ApiProperty({ description: "User's join with user_cards" })
  @OneToMany(() => UserCard, (card) => card.user_id)
  user: UserCard[];
}
