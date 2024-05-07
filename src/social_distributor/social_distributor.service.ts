import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SocialDistributor } from './entities/social_distributor.entity';
import { CreateSocialDistributorDto } from './dto/create-social_distributor.dto';
import { UpdateSocialDistributorDto } from './dto/update-social_distributor.dto';

@Injectable()
export class SocialDistributorService {
  constructor(
    @InjectRepository(SocialDistributor)
    private readonly socialRepository: Repository<SocialDistributor>,
  ) {}

  async create(createSocialDistributorDto: CreateSocialDistributorDto) {
    try {
      const social = this.socialRepository.create(createSocialDistributorDto);
      return this.socialRepository.save(social);
    } catch (e) {
      return { error: e.message };
    }
  }

  async findAll() {
    return this.socialRepository.find({
      relations: ['social_id', 'distributor_id'],
    });
  }

  async findOne(id: number) {
    try {
      const social = await this.socialRepository.findOne({
        where: { id },
      });
      if (!social) {
        throw new NotFoundException(
          `SocialDistributor with ID ${id} not found`,
        );
      }
      return social;
    } catch (e) {
      return { error: e.message };
    }
  }

  async update(
    id: number,
    updateSocialDistributorDto: UpdateSocialDistributorDto,
  ) {
    try {
      await this.socialRepository.update({ id }, updateSocialDistributorDto);
      return this.findOne(id);
    } catch (e) {
      return { error: e.message };
    }
  }

  async remove(id: number) {
    const socialToRemove = await this.findOne(id);
    if ('error' in socialToRemove) {
      // SocialDistributor not found, return the error
      return socialToRemove;
    }
    return this.socialRepository.remove([socialToRemove]);
  }
}
