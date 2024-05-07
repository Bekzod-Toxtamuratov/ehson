import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EhsonInfo } from './entities/ehson_info.entity';
import { CreateEhsonInfoDto } from './dto/create-ehson_info.dto';
import { UpdateEhsonInfoDto } from './dto/update-ehson_info.dto';

@Injectable()
export class EhsonInfoService {
  constructor(
    @InjectRepository(EhsonInfo)
    private readonly ehsonInfoRepository: Repository<EhsonInfo>,
  ) {}

  async create(createEhsonInfoDto: CreateEhsonInfoDto) {
    try {
      const ehsonInfo =
        this.ehsonInfoRepository.create(createEhsonInfoDto);
      return this.ehsonInfoRepository.save(ehsonInfo);
    } catch (e) {
      return { error: e.message };
    }
  }

  async findAll() {
    return this.ehsonInfoRepository.find({ relations: ['ehsontype'] });
  }

  async findOne(id: number) {
    try {
      const ehsonInfo = await this.ehsonInfoRepository.findOne({
        where: { id },
      });
      if (!ehsonInfo) {
        throw new NotFoundException(`EhsonInfo with ID ${id} not found`);
      }
      return ehsonInfo;
    } catch (e) {
      return { error: e.message };
    }
  }

  async update(id: number, updateEhsonInfoDto: UpdateEhsonInfoDto) {
    try {
      await this.ehsonInfoRepository.update({ id }, updateEhsonInfoDto);
      return this.findOne(id);
    } catch (e) {
      return { error: e.message };
    }
  }

  async remove(id: number) {
    const ehsonInfoToRemove = await this.findOne(id);
    if ('error' in ehsonInfoToRemove) {
      // EhsonInfo not found, return the error
      return ehsonInfoToRemove;
    }
    return this.ehsonInfoRepository.remove([ehsonInfoToRemove]);
  }
}
