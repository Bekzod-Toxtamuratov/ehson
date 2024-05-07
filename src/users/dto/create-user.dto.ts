export class CreateUserDto {
  full_name: string;
  phone: string;
  email: string;
  password: string;
  confirm_password: string;
  is_active: boolean;
}
