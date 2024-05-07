import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SuccessfullyCompletedService } from './successfully_completed.service';
import { CreateSuccessfullyCompletedDto } from './dto/create-successfully_completed.dto';
import { UpdateSuccessfullyCompletedDto } from './dto/update-successfully_completed.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('successfully-completed')
@Controller('successfully-completed')
export class SuccessfullyCompletedController {
  constructor(
    private readonly successfullyCompletedService: SuccessfullyCompletedService,
  ) {}

  @Post()
  create(
    @Body() createSuccessfullyCompletedDto: CreateSuccessfullyCompletedDto,
  ) {
    return this.successfullyCompletedService.create(
      createSuccessfullyCompletedDto,
    );
  }

  @Get()
  findAll() {
    return this.successfullyCompletedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.successfullyCompletedService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSuccessfullyCompletedDto: UpdateSuccessfullyCompletedDto,
  ) {
    return this.successfullyCompletedService.update(
      +id,
      updateSuccessfullyCompletedDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.successfullyCompletedService.remove(+id);
  }
}
