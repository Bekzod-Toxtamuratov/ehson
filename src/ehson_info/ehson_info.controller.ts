import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EhsonInfoService } from './ehson_info.service';
import { CreateEhsonInfoDto } from './dto/create-ehson_info.dto';
import { UpdateEhsonInfoDto } from './dto/update-ehson_info.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('ehson-info')
@Controller('ehson-info')
export class EhsonInfoController {
  constructor(private readonly ehsonInfoService: EhsonInfoService) {}

  @Post()
  create(@Body() createEhsonInfoDto: CreateEhsonInfoDto) {
    return this.ehsonInfoService.create(createEhsonInfoDto);
  }

  @Get()
  findAll() {
    return this.ehsonInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ehsonInfoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEhsonInfoDto: UpdateEhsonInfoDto,
  ) {
    return this.ehsonInfoService.update(+id, updateEhsonInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ehsonInfoService.remove(+id);
  }
}
