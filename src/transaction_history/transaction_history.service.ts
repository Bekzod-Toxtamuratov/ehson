import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransactionHistory } from './entities/transaction_history.entity';
import { CreateTransactionHistoryDto } from './dto/create-transaction_history.dto';
import { UpdateTransactionHistoryDto } from './dto/update-transaction_history.dto';

@Injectable()
export class TransactionHistoryService {
  constructor(
    @InjectRepository(TransactionHistory)
    private readonly transactionHistoryRepository: Repository<TransactionHistory>,
  ) {}

  async create(createTransactionHistoryDto: CreateTransactionHistoryDto) {
    try {
      const transactionHistory = this.transactionHistoryRepository.create(
        createTransactionHistoryDto,
      );
      return this.transactionHistoryRepository.save(transactionHistory);
    } catch (e) {
      return { error: e.message };
    }
  }

  async findAll() {
    return this.transactionHistoryRepository.find({ relations: ['wallet_id'] });
  }

  async findOne(id: number) {
    try {
      const transactionHistory =
        await this.transactionHistoryRepository.findOne({
          where: { id },
        });
      if (!transactionHistory) {
        throw new NotFoundException(
          `TransactionHistory with ID ${id} not found`,
        );
      }
      return transactionHistory;
    } catch (e) {
      return { error: e.message };
    }
  }

  async update(
    id: number,
    updateTransactionHistoryDto: UpdateTransactionHistoryDto,
  ) {
    try {
      await this.transactionHistoryRepository.update(
        { id },
        updateTransactionHistoryDto,
      );
      return this.findOne(id);
    } catch (e) {
      return { error: e.message };
    }
  }

  async remove(id: number) {
    const transactionHistoryToRemove = await this.findOne(id);
    if ('error' in transactionHistoryToRemove) {
      // TransactionHistory not found, return the error
      return transactionHistoryToRemove;
    }
    return this.transactionHistoryRepository.remove([
      transactionHistoryToRemove,
    ]);
  }
}
