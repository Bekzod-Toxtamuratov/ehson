import { Repository } from 'typeorm';
import { CreateReplenishWalletDto } from './dto/create-replenish_wallet.dto';
import { UserCard } from '../user_cards/entities/user_card.entity';
import { Response } from 'express';
import { User } from '../users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { MailService } from '../mail/mail.service';
import { Wallet } from '../wallet/entities/wallet.entity';
import { CheckCodeDto } from './dto/checkCode.dto';
export declare class ReplenishWalletService {
    private readonly userCardReop;
    private readonly walletRepo;
    private readonly userRepo;
    private readonly jwtService;
    private readonly mailService;
    constructor(userCardReop: Repository<UserCard>, walletRepo: Repository<Wallet>, userRepo: Repository<User>, jwtService: JwtService, mailService: MailService);
    getTokens(userCard: UserCard, amount: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    create(createReplenishWalletDto: CreateReplenishWalletDto, id: number, res: Response): Promise<Response<any, Record<string, any>> | {
        error: any;
    }>;
    checkCode(token: string, checkCode: CheckCodeDto): Promise<{
        message: string;
        error?: undefined;
    } | {
        error: any;
        message?: undefined;
    }>;
}
