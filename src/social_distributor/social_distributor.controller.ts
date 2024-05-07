import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SocialDistributorService } from './social_distributor.service';
import { CreateSocialDistributorDto } from './dto/create-social_distributor.dto';
import { UpdateSocialDistributorDto } from './dto/update-social_distributor.dto';

@Controller('social-distributor')
export class SocialDistributorController {
  constructor(private readonly socialDistributorService: SocialDistributorService) {}

  @Post()
  create(@Body() createSocialDistributorDto: CreateSocialDistributorDto) {
    return this.socialDistributorService.create(createSocialDistributorDto);
  }

  @Get()
  findAll() {
    return this.socialDistributorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.socialDistributorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSocialDistributorDto: UpdateSocialDistributorDto) {
    return this.socialDistributorService.update(+id, updateSocialDistributorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.socialDistributorService.remove(+id);
  }
}
