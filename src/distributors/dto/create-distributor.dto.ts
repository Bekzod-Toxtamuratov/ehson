import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class CreateDistributorDto {
  @IsString()
  @IsNotEmpty()
  company_name: string;
  working_years: number;
  address: string;
  @IsPhoneNumber('UZ')
  phone_number: string;
  @IsEmail()
  email: string;
  @IsString()
  license_number: string;
  @IsString()
  license_image: string;
}
