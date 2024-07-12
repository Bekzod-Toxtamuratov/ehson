import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  full_name: string;

  @IsString()
  @IsNotEmpty()
  @IsPhoneNumber('UZ')
  phone: string;

  @IsEmail()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;
  confirm_password: string;
  is_active: boolean;
}
