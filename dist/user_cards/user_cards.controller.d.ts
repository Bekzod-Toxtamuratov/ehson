/// <reference types="cookie-parser" />
import { UserCardsService } from './user_cards.service';
import { CreateUserCardDto } from './dto/create-user_card.dto';
import { UpdateUserCardDto } from './dto/update-user_card.dto';
import { Request } from 'express';
export declare class UserCardsController {
    private readonly userCardsService;
    constructor(userCardsService: UserCardsService);
    create(createUserCardDto: CreateUserCardDto, req: Request): Promise<import("./entities/user_card.entity").UserCard>;
    findAll(): Promise<import("./entities/user_card.entity").UserCard[]>;
    findOne(id: string): Promise<import("./entities/user_card.entity").UserCard | {
        error: any;
    }>;
    update(id: string, updateUserCardDto: UpdateUserCardDto): Promise<import("./entities/user_card.entity").UserCard | {
        error: any;
    }>;
    remove(id: string): Promise<import("./entities/user_card.entity").UserCard[] | {
        error: any;
    }>;
}
