"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplenishWalletService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_card_entity_1 = require("../user_cards/entities/user_card.entity");
const user_entity_1 = require("../users/entities/user.entity");
const OTPnumber_1 = require("./OTPnumber");
const jwt_1 = require("@nestjs/jwt");
const mail_service_1 = require("../mail/mail.service");
const wallet_entity_1 = require("../wallet/entities/wallet.entity");
let ReplenishWalletService = class ReplenishWalletService {
    constructor(userCardReop, walletRepo, userRepo, jwtService, mailService) {
        this.userCardReop = userCardReop;
        this.walletRepo = walletRepo;
        this.userRepo = userRepo;
        this.jwtService = jwtService;
        this.mailService = mailService;
    }
    async getTokens(userCard, amount) {
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
    async create(createReplenishWalletDto, id, res) {
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
                throw new common_1.InternalServerErrorException('UserCard not found');
            }
            console.log(userCard.balance <= replenish_amount);
            const code = (0, OTPnumber_1.otpGenerator)(6);
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
        }
        catch (e) {
            return { error: e };
        }
    }
    async checkCode(token, checkCode) {
        try {
            const { code } = checkCode;
            console.log(code);
            const [headerB64, payloadB64, signature] = token.split('.');
            const payload = Buffer.from(payloadB64, 'base64').toString('utf-8');
            const payloadData = JSON.parse(payload);
            const userCardId = payloadData.id;
            const userId = payloadData.user_id;
            const amount = payloadData.amount;
            const user = await this.userRepo.findOne({ where: { id: userId } });
            if (user.code != code) {
                throw new Error('Code doesnt match');
            }
            else {
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
        }
        catch (e) {
            return { error: e.message };
        }
    }
};
exports.ReplenishWalletService = ReplenishWalletService;
exports.ReplenishWalletService = ReplenishWalletService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_card_entity_1.UserCard)),
    __param(1, (0, typeorm_1.InjectRepository)(wallet_entity_1.Wallet)),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        jwt_1.JwtService,
        mail_service_1.MailService])
], ReplenishWalletService);
//# sourceMappingURL=replenish_wallet.service.js.map