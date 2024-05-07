import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserCard } from './entities/user_card.entity';
import { CreateUserCardDto } from './dto/create-user_card.dto';
import { UpdateUserCardDto } from './dto/update-user_card.dto';
import { Request } from 'express';

@Injectable()
export class UserCardsService {
  constructor(
    @InjectRepository(UserCard)
    private readonly userCardsRepository: Repository<UserCard>,
  ) {}

  async create(createUserCardDto: CreateUserCardDto, req: Request) {
    try {
      const myCookie = req.cookies['refresh_token'];
      console.log(myCookie);

      // Check if the cookie exists
      if (!myCookie) {
        throw new Error('Refresh token cookie not found');
      }

      // Parse the cookie to extract user ID
      let userId;
      try {
        const [headerB64, payloadB64, signature] = myCookie.split('.');

        const payload = Buffer.from(payloadB64, 'base64').toString('utf-8');

        // Parse the decoded payload
        const payloadData = JSON.parse(payload);
        userId = payloadData.id;
        console.log(userId);
      } catch (error) {
        throw new Error('Invalid JSON format in refresh token cookie');
      }

      // Check if userId is present and valid
      if (!userId) {
        throw new Error('User ID not found in refresh token cookie');
      }

      // Associate the user ID with the user card data
      const userCardData = { ...createUserCardDto, user_id: userId };

      // Create the user card
      const userCard = this.userCardsRepository.create(userCardData);

      // Save the user card
      return this.userCardsRepository.save(userCard);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  async findAll() {
    return this.userCardsRepository.find({ relations: ['user_id'] });
  }

  async findOne(id: number) {
    try {
      const userCards = await this.userCardsRepository.findOne({
        where: { id },
      });
      if (!userCards) {
        throw new NotFoundException(`UserCards with ID ${id} not found`);
      }
      return userCards;
    } catch (e) {
      return { error: e.message };
    }
  }

  async update(id: number, updateUserCardsDto: UpdateUserCardDto) {
    try {
      await this.userCardsRepository.update({ id }, updateUserCardsDto);
      return this.findOne(id);
    } catch (e) {
      return { error: e.message };
    }
  }

  async remove(id: number) {
    const userCardsToRemove = await this.findOne(id);
    if ('error' in userCardsToRemove) {
      // UserCards not found, return the error
      return userCardsToRemove;
    }
    return this.userCardsRepository.remove([userCardsToRemove]);
  }
}
