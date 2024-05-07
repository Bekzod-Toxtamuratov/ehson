import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SuccessfullyCompleted } from './entities/successfully_completed.entity';
import { CreateSuccessfullyCompletedDto } from './dto/create-successfully_completed.dto';
import { UpdateSuccessfullyCompletedDto } from './dto/update-successfully_completed.dto';

@Injectable()
export class SuccessfullyCompletedService {
  constructor(
    @InjectRepository(SuccessfullyCompleted)
    private readonly successfullyCompletedRepository: Repository<SuccessfullyCompleted>,
  ) {}

  async create(createSuccessfullyCompletedDto: CreateSuccessfullyCompletedDto) {
    try {
      const successfullyCompleted = this.successfullyCompletedRepository.create(
        createSuccessfullyCompletedDto,
      );
      return this.successfullyCompletedRepository.save(successfullyCompleted);
    } catch (e) {
      return { error: e.message };
    }
  }

  async findAll() {
    return this.successfullyCompletedRepository.find({
      relations: ['distributor', 'ehson'],
    });
  }

  async findOne(id: number) {
    try {
      const successfullyCompleted =
        await this.successfullyCompletedRepository.findOne({
          where: { id },
        });
      if (!successfullyCompleted) {
        throw new NotFoundException(
          `SuccessfullyCompleted with ID ${id} not found`,
        );
      }
      return successfullyCompleted;
    } catch (e) {
      return { error: e.message };
    }
  }

  async update(
    id: number,
    updateSuccessfullyCompletedDto: UpdateSuccessfullyCompletedDto,
  ) {
    try {
      await this.successfullyCompletedRepository.update(
        { id },
        updateSuccessfullyCompletedDto,
      );
      return this.findOne(id);
    } catch (e) {
      return { error: e.message };
    }
  }

  async remove(id: number) {
    const successfullyCompletedToRemove = await this.findOne(id);
    if ('error' in successfullyCompletedToRemove) {
      // SuccessfullyCompleted not found, return the error
      return successfullyCompletedToRemove;
    }
    return this.successfullyCompletedRepository.remove([
      successfullyCompletedToRemove,
    ]);
  }
}
