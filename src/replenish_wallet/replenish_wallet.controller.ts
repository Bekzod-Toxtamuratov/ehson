import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  Req,
} from '@nestjs/common';
import { ReplenishWalletService } from './replenish_wallet.service';
import { CreateReplenishWalletDto } from './dto/create-replenish_wallet.dto';
import { Request, Response } from 'express';
import { Cookiegetter } from '../decorators/cookie_getter.decorator';
import { CheckCodeDto } from './dto/checkCode.dto';

@Controller('replenish-wallet')
export class ReplenishWalletController {
  constructor(
    private readonly replenishWalletService: ReplenishWalletService,
  ) {}

  @Post(':id/add')
  create(
    @Body() createReplenishWalletDto: CreateReplenishWalletDto,
    @Param('id') id: number,
    @Res() res: Response,
  ) {
    return this.replenishWalletService.create(
      createReplenishWalletDto,
      id,
      res,
    );
  }

  @Post('/check-code')
  checkCode(
    @Body() checkCodeDto: CheckCodeDto,
    @Cookiegetter('code_transaction') codeReader: string,
  ) {
    // console.log(checkCodeDto);

    return this.replenishWalletService.checkCode(codeReader, checkCodeDto);
  }
}
