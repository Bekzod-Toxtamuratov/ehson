import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wallet } from './entities/wallet.entity'; // Assuming you have a Wallet entity
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { UserCard } from '../user_cards/entities/user_card.entity';

@Injectable()
export class WalletService {
  constructor(
    @InjectRepository(Wallet)
    private readonly walletRepository: Repository<Wallet>,
    @InjectRepository(UserCard)
    private readonly userCardRepo: Repository<UserCard>,
  ) {}

  async create(createWalletDto: CreateWalletDto, id: number) {
    try {
      const userCard = await this.userCardRepo.findOne({
        where: { id },
      });
      if ('error' in userCard) {
        // UserCard not found, return the error
        return userCard;
      }
      const balance = 0;
      const wallet = this.walletRepository.create({
        ...createWalletDto,
        user_cards_id: userCard,
        balance: balance,
      });
      return this.walletRepository.save(wallet);
    } catch (e) {
      return { error: e.message };
    }
  }

  async findAll() {
    return this.walletRepository.find({
      relations: ['user_cards_id', 'ehson_type_id'],
    });
  }

  async findOne(id: number) {
    try {
      const wallet = await this.walletRepository.findOne({
        where: { id },
      });
      if (!wallet) {
        throw new NotFoundException(`Wallet with ID ${id} not found`);
      }
      return wallet;
    } catch (e) {
      return { error: e.message };
    }
  }

  async update(id: number, updateWalletDto: UpdateWalletDto) {
    try {
      await this.walletRepository.update({ id }, updateWalletDto);
      return this.findOne(id);
    } catch (e) {
      return { error: e.message };
    }
  }

  async remove(id: number) {
    const walletToRemove = await this.findOne(id);
    if ('error' in walletToRemove) {
      // Wallet not found, return the error
      return walletToRemove;
    }
    return this.walletRepository.remove([walletToRemove]);
  }
}
