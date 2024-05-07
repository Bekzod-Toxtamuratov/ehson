import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EhsonType } from "./entities/ehson_type.entity";
import { Repository } from "typeorm";
import { CreateEhsonTypeDto } from "./dto/create-ehson_type.dto";
import { UpdateEhsonTypeDto } from "./dto/update-ehson_type.dto";


@Injectable()
export class EhsonTypesService {
  constructor(
    @InjectRepository(EhsonType)
    private readonly ehsonTypeRepository: Repository<EhsonType>,
  ) {}

  async create(createEhsonTypeDto: CreateEhsonTypeDto) {
    try {
      const ehsonType =
        this.ehsonTypeRepository.create(createEhsonTypeDto);
      return this.ehsonTypeRepository.save(ehsonType);
    } catch (e) {
      return { error: e.message };
    }
  }

  async findAll() {
    return this.ehsonTypeRepository.find();
  }

  async findOne(id: number) {
    try {
      const ehsonType = await this.ehsonTypeRepository.findOne({
        where: { id },
      });
      if (!ehsonType) {
        throw new NotFoundException(`EhsonType with ID ${id} not found`);
      }
      return ehsonType;
    } catch (e) {
      return { error: e.message };
    }
  }

  async update(id: number, updateEhsonTypeDto: UpdateEhsonTypeDto) {
    try {
      await this.ehsonTypeRepository.update({ id }, updateEhsonTypeDto);
      return this.findOne(id);
    } catch (e) {
      return { error: e.message };
    }
  }

  async remove(id: number) {
    const ehsonTypeToRemove = await this.findOne(id);
    if ('error' in ehsonTypeToRemove) {
      // EhsonType not found, return the error
      return ehsonTypeToRemove;
    }
    return this.ehsonTypeRepository.remove([ehsonTypeToRemove]);
  }
}
