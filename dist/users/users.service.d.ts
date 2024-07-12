import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserLoginDto } from './dto/login.dto';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
export declare class UserService {
    private readonly userRepository;
    private readonly jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    getTokens(user: User): Promise<{
        accessToken: string;
        refreshToken: string;
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
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User | {
        error: any;
    }>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<User | {
        error: any;
    }>;
    remove(id: number): Promise<User[] | {
        error: any;
    }>;
}
