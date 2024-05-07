import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UserCardsService } from './user_cards.service';
import { CreateUserCardDto } from './dto/create-user_card.dto';
import { UpdateUserCardDto } from './dto/update-user_card.dto';
import { ApiTags } from '@nestjs/swagger';
import { UserGuard } from '../guards/user.guard';
import { Request } from 'express';
import { AdminGuard } from '../guards/admin.guard';

@ApiTags('user-cards')
@Controller('user-cards')
export class UserCardsController {
  constructor(private readonly userCardsService: UserCardsService) {}

  @UseGuards(UserGuard)
  @Post()
  create(@Body() createUserCardDto: CreateUserCardDto, @Req() req: Request) {
    return this.userCardsService.create(createUserCardDto, req);
  }
  @UseGuards(UserGuard)
  @Get()
  findAll() {
    return this.userCardsService.findAll();
  }
  
  @UseGuards(UserGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userCardsService.findOne(+id);
  }

  @UseGuards(UserGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserCardDto: UpdateUserCardDto,
  ) {
    return this.userCardsService.update(+id, updateUserCardDto);
  }

  @UseGuards(UserGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userCardsService.remove(+id);
  }
}
