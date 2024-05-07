import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Social } from './entities/social.entity'; // Assuming you have a Social entity
import { CreateSocialDto } from './dto/create-social.dto';
import { UpdateSocialDto } from './dto/update-social.dto';

@Injectable()
export class SocialService {
  constructor(
    @InjectRepository(Social)
    private readonly socialRepository: Repository<Social>,
  ) {}

  async create(createSocialDto: CreateSocialDto) {
    try {
      const social = this.socialRepository.create(createSocialDto);
      return this.socialRepository.save(social);
    } catch (e) {
      return { error: e.message };
    }
  }

  async findAll() {
    return this.socialRepository.find();
  }

  async findOne(id: number) {
    try {
      const social = await this.socialRepository.findOne({
        where: { id },
      });
      if (!social) {
        throw new NotFoundException(`Social with ID ${id} not found`);
      }
      return social;
    } catch (e) {
      return { error: e.message };
    }
  }

  async update(id: number, updateSocialDto: UpdateSocialDto) {
    try {
      await this.socialRepository.update({ id }, updateSocialDto);
      return this.findOne(id);
    } catch (e) {
      return { error: e.message };
    }
  }

  async remove(id: number) {
    const socialToRemove = await this.findOne(id);
    if ('error' in socialToRemove) {
      // Social not found, return the error
      return socialToRemove;
    }
    return this.socialRepository.remove([socialToRemove]);
  }
}
