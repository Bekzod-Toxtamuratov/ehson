import { Repository } from 'typeorm';
import { Wallet } from './entities/wallet.entity';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { UserCard } from '../user_cards/entities/user_card.entity';
export declare class WalletService {
    private readonly walletRepository;
    private readonly userCardRepo;
    constructor(walletRepository: Repository<Wallet>, userCardRepo: Repository<UserCard>);
    create(createWalletDto: CreateWalletDto, id: number): Promise<Wallet | (UserCard & Record<"error", unknown>) | {
        error: any;
    }>;
    findAll(): Promise<Wallet[]>;
    findOne(id: number): Promise<Wallet | {
        error: any;
    }>;
    update(id: number, updateWalletDto: UpdateWalletDto): Promise<Wallet | {
        error: any;
    }>;
    remove(id: number): Promise<Wallet[] | {
        error: any;
    }>;
}
