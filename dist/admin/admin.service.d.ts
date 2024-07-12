import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { Admin } from './entities/admin.entity';
import { CreateAdminDto } from './dto/create-admin.dto';
import { Response } from 'express';
export declare class AdminService {
    private readonly adminModel;
    private readonly jwtService;
    constructor(adminModel: Repository<Admin>, jwtService: JwtService);
    getTokens(admin: Admin): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    findAll(): Promise<Admin[]>;
    logout(refreshToken: string, res: Response): Promise<{
        message: string;
    }>;
    create(createAdminDto: CreateAdminDto): Promise<{
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
    signIn(createAuthDto: CreateAdminDto, res: Response): Promise<{
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
        message: string;
    }>;
}
