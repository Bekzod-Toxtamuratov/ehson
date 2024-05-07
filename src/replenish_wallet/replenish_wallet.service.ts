import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { ReplenishWallet } from './entities/replenish_wallet.entity';
import { CreateReplenishWalletDto } from './dto/create-replenish_wallet.dto';
import { UpdateReplenishWalletDto } from './dto/update-replenish_wallet.dto';
import { UserCard } from '../user_cards/entities/user_card.entity';
import { Request, Response } from 'express';
import { User } from '../users/entities/user.entity';
import { otpGenerator } from './OTPnumber';
import { JwtService } from '@nestjs/jwt';
import { MailService } from '../mail/mail.service';
import { NotFoundError } from 'rxjs';
import { Wallet } from '../wallet/entities/wallet.entity';
import { CheckCodeDto } from './dto/checkCode.dto';

@Injectable()
export class ReplenishWalletService {
  constructor(
    @InjectRepository(UserCard)
    private readonly userCardReop: Repository<UserCard>,
    @InjectRepository(Wallet)
    private readonly walletRepo: Repository<Wallet>,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    private readonly jwtService: JwtService,
    private readonly mailService: MailService,
  ) {}

  async getTokens(userCard: UserCard, amount: string) {
    const payload = {
      id: userCard.id,
      user_id: userCard.user_id,
      amount: amount,
    };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);
    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  }

  async create(
    createReplenishWalletDto: CreateReplenishWalletDto,
    id: number,
    res: Response,
  ) {
    try {
      const { replenish_amount } = createReplenishWalletDto;
      console.log(replenish_amount);

      const userCard = await this.userCardReop.findOne({
        where: { id },
      });
      console.log(userCard);

      const user = await this.userRepo.findOne({
        where: { id: userCard.user_id },
      });
      console.log(user);

      if (!userCard) {
        // UserCard not found, return the error
        throw new InternalServerErrorException('UserCard not found');
      }
      console.log(userCard.balance <= replenish_amount);
      const code = otpGenerator(6);
      console.log(code);

      if (userCard.balance <= replenish_amount) {
        return res.send({ message: 'Not enough funds to make transaction' });
      }

      if (replenish_amount <= 500) {
        return res.send({ message: "Amount mustn't be less than 500" });
      }
      console.log('kk');

      user.code = code;

      await this.userRepo.save(user);
      setTimeout(async () => {
        user.code = '0';
        await this.userRepo.save(user);
      }, 180000);

      const tokens = await this.getTokens(userCard, String(replenish_amount));
      res.cookie('code_transaction', tokens.refreshToken, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      await this.mailService.sendMail(user);
      return res.send({ message: 'Code sent' });
    } catch (e) {
      return { error: e };
    }
  }

  async checkCode(token: string, checkCode: CheckCodeDto) {
    try {
      const { code } = checkCode;
      console.log(code);

      const [headerB64, payloadB64, signature] = token.split('.');

      // Decode each part from base64
      const payload = Buffer.from(payloadB64, 'base64').toString('utf-8');

      const payloadData = JSON.parse(payload);

      const userCardId = payloadData.id;
      const userId = payloadData.user_id;
      const amount = payloadData.amount;

      const user = await this.userRepo.findOne({ where: { id: userId } });

      if (user.code != code) {
        throw new Error('Code doesnt match');
      } else {
        const userCard = await this.userCardReop.findOne({
          where: { id: userCardId },
        });
        if (!userCard) {
          throw new Error('UserCard not found');
        }
        userCard.balance = userCard.balance - amount;
        await this.userCardReop.save(userCard);

        const wallet = await this.walletRepo.findOne({
          where: { user_cards_id: userCardId },
        });
        wallet.balance = wallet.balance + +amount;
        await this.walletRepo.save(wallet);
      }

      this.userRepo.update(userId, { code: '0' });
      return { message: 'Transaction completed' };
    } catch (e) {
      return { error: e.message };
    }
  }
}
