import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { EhsonTypesService } from './ehson_type.service';
import { CreateEhsonTypeDto } from './dto/create-ehson_type.dto';
import { UpdateEhsonTypeDto } from './dto/update-ehson_type.dto';
import { ApiTags } from '@nestjs/swagger';
import { AdminGuard } from '../guards/admin.guard';

@ApiTags('ehson-type')
@Controller('ehson-type')
export class EhsonTypeController {
  constructor(private readonly ehsonTypeService: EhsonTypesService) {}

  @UseGuards(AdminGuard)
  @Post()
  create(@Body() createEhsonTypeDto: CreateEhsonTypeDto) {
    return this.ehsonTypeService.create(createEhsonTypeDto);
  }

  @Get()
  findAll() {
    return this.ehsonTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ehsonTypeService.findOne(+id);
  }
  @UseGuards(AdminGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEhsonTypeDto: UpdateEhsonTypeDto,
  ) {
    return this.ehsonTypeService.update(+id, updateEhsonTypeDto);
  }
  @UseGuards(AdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ehsonTypeService.remove(+id);
  }
}
