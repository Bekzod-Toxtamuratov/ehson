import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { Response } from 'express';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
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
    signIn(createAdminDto: CreateAdminDto, res: Response): Promise<{
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
        message: string;
    }>;
    logout(refreshToken: string, res: Response): Promise<{
        message: string;
    }>;
    findAll(): Promise<import("./entities/admin.entity").Admin[]>;
}
