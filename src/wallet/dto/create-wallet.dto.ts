import { IsString } from "class-validator";

export class CreateWalletDto {
  @IsString()
  withdraw_amount: string;
  withdraw_days: string;
  ehson_type_id: Object;
}
