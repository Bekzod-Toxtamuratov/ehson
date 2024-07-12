/// <reference types="cookie-parser" />
import { Repository } from 'typeorm';
import { UserCard } from './entities/user_card.entity';
import { CreateUserCardDto } from './dto/create-user_card.dto';
import { UpdateUserCardDto } from './dto/update-user_card.dto';
import { Request } from 'express';
export declare class UserCardsService {
    private readonly userCardsRepository;
    constructor(userCardsRepository: Repository<UserCard>);
    create(createUserCardDto: CreateUserCardDto, req: Request): Promise<UserCard>;
    findAll(): Promise<UserCard[]>;
    findOne(id: number): Promise<UserCard | {
        error: any;
    }>;
    update(id: number, updateUserCardsDto: UpdateUserCardDto): Promise<UserCard | {
        error: any;
    }>;
    remove(id: number): Promise<UserCard[] | {
        error: any;
    }>;
}
