import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateEhsonInfoDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  needed_amount: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  image: string;
  @IsString()
  @IsNotEmpty()
  status: string;
  @IsDate()
  date: Date;
  ehson_type_id: number;
}
