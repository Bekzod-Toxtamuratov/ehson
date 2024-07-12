import { ReplenishWalletService } from './replenish_wallet.service';
import { CreateReplenishWalletDto } from './dto/create-replenish_wallet.dto';
import { Response } from 'express';
import { CheckCodeDto } from './dto/checkCode.dto';
export declare class ReplenishWalletController {
    private readonly replenishWalletService;
    constructor(replenishWalletService: ReplenishWalletService);
    create(createReplenishWalletDto: CreateReplenishWalletDto, id: number, res: Response): Promise<Response<any, Record<string, any>> | {
        error: any;
    }>;
    checkCode(checkCodeDto: CheckCodeDto, codeReader: string): Promise<{
        message: string;
        error?: undefined;
    } | {
        error: any;
        message?: undefined;
    }>;
}
