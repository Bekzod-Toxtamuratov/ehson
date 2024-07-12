import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserLoginDto } from './dto/login.dto';
import { Response } from 'express';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UserService);
    create(createUserDto: CreateUserDto): Promise<{
        data: string;
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
        error?: undefined;
    } | {
        error: any;
        data?: undefined;
        tokens?: undefined;
    }>;
    login(loginDto: UserLoginDto, res: Response): Promise<{
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
        message: string;
    }>;
    logout(refreshToken: string, res: Response): Promise<{
        message: string;
    }>;
    findAll(): Promise<import("./entities/user.entity").User[]>;
    findOne(id: string): Promise<import("./entities/user.entity").User | {
        error: any;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("./entities/user.entity").User | {
        error: any;
    }>;
    remove(id: string): Promise<import("./entities/user.entity").User[] | {
        error: any;
    }>;
}
