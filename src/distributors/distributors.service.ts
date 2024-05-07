import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Distributor } from './entities/distributor.entity'; // Assuming you have a Distributor entity
import { CreateDistributorDto } from './dto/create-distributor.dto';
import { UpdateDistributorDto } from './dto/update-distributor.dto';
import e from 'express';

@Injectable()
export class DistributorsService {
  constructor(
    @InjectRepository(Distributor)
    private readonly distributorRepository: Repository<Distributor>,
  ) {}

  async create(createDistributorDto: CreateDistributorDto) {
    try {
      const distributor =
        this.distributorRepository.create(createDistributorDto);
      return this.distributorRepository.save(distributor);
    } catch (e) {
      return { error: e.message };
    }
  }

  async findAll() {
    return this.distributorRepository.find();
  }

  async findOne(id: number) {
    try {
      const distributor = await this.distributorRepository.findOne({
        where: { id },
      });
      if (!distributor) {
        throw new NotFoundException(`Distributor with ID ${id} not found`);
      }
      return distributor;
    } catch (e) {
      return { error: e.message };
    }
  }

  async update(id: number, updateDistributorDto: UpdateDistributorDto) {
    try {
      await this.distributorRepository.update({ id }, updateDistributorDto);
      return this.findOne(id);
    } catch (e) {
      return { error: e.message };
    }
  }

  async remove(id: number) {
    const distributorToRemove = await this.findOne(id);
    if ('error' in distributorToRemove) {
      // Distributor not found, return the error
      return distributorToRemove;
    }
    return this.distributorRepository.remove([distributorToRemove]);
  }
}
