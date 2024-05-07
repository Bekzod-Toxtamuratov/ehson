import { ApiProperty } from '@nestjs/swagger';

export class CreateAdminDto {
  @ApiProperty({ example: 'Muhammadjon', description: 'Amdin Name' })
  name: string;

  @ApiProperty({ example: '56d54d6f6f', description: 'Amdin Password' })
  password: string;

  @ApiProperty({ example: '56d54d6f6f', description: 'Amdin Confirm Password' })
  confirm_password: string;

  @ApiProperty({ example: '+998901006706', description: 'Admin Phone Number' })
  phone: string;
}
