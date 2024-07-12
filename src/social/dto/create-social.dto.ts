import { IsNotEmpty, IsString } from "class-validator";

export class CreateSocialDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  logo: string;
}
