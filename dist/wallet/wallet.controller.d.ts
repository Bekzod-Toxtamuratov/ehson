import { WalletService } from './wallet.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
export declare class WalletController {
    private readonly walletService;
    constructor(walletService: WalletService);
    create(createWalletDto: CreateWalletDto, id: number): Promise<import("./entities/wallet.entity").Wallet | (import("../user_cards/entities/user_card.entity").UserCard & Record<"error", unknown>) | {
        error: any;
    }>;
    findAll(): Promise<import("./entities/wallet.entity").Wallet[]>;
    findOne(id: string): Promise<import("./entities/wallet.entity").Wallet | {
        error: any;
    }>;
    update(id: string, updateWalletDto: UpdateWalletDto): Promise<import("./entities/wallet.entity").Wallet | {
        error: any;
    }>;
    remove(id: string): Promise<import("./entities/wallet.entity").Wallet[] | {
        error: any;
    }>;
}
