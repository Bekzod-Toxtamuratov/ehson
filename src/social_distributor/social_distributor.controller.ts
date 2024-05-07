import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SocialDistributorService } from './social_distributor.service';
import { CreateSocialDistributorDto } from './dto/create-social_distributor.dto';
import { UpdateSocialDistributorDto } from './dto/update-social_distributor.dto';
import { AdminGuard } from '../guards/admin.guard';

@Controller('social-distributor')
export class SocialDistributorController {
  constructor(
    private readonly socialDistributorService: SocialDistributorService,
  ) {}
  @UseGuards(AdminGuard)
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
  @UseGuards(AdminGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSocialDistributorDto: UpdateSocialDistributorDto,
  ) {
    return this.socialDistributorService.update(
      +id,
      updateSocialDistributorDto,
    );
  }
  @UseGuards(AdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.socialDistributorService.remove(+id);
  }
}
