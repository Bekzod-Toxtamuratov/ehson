"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const jwt_1 = require("@nestjs/jwt");
const admin_entity_1 = require("./entities/admin.entity");
const bcrypt = require("bcrypt");
let AdminService = class AdminService {
    constructor(adminModel, jwtService) {
        this.adminModel = adminModel;
        this.jwtService = jwtService;
    }
    async getTokens(admin) {
        const payload = {
            id: admin.id,
            is_active: admin.is_active,
            is_creator: admin.is_creator,
        };
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(payload, {
                secret: process.env.ACCESS_TOKEN_KEY,
                expiresIn: process.env.ACCESS_TOKEN_TIME,
            }),
            this.jwtService.signAsync(payload, {
                secret: process.env.REFRESH_TOKEN_KEY,
                expiresIn: process.env.REFRESH_TOKEN_TIME,
            }),
        ]);
        return {
            accessToken,
            refreshToken,
        };
    }
    async findAll() {
        return this.adminModel.find();
    }
    async logout(refreshToken, res) {
        try {
            const adminData = await this.jwtService.verify(refreshToken, {
                secret: process.env.REFRESH_TOKEN_KEY,
            });
            if (!adminData) {
                throw new common_1.BadRequestException('Admin not verified');
            }
            const admin = await this.adminModel.findOne({
                where: { id: adminData.id },
            });
            if (!admin) {
                throw new common_1.BadRequestException('Admin not found');
            }
            admin.refreshToken = null;
            const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);
            admin.refreshToken = hashedRefreshToken;
            const updatedAdmin = await this.adminModel.save(admin);
            res.clearCookie('refresh_token');
            const response = {
                message: 'Admin logged out successfully',
            };
            return response;
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to logout');
        }
    }
    async create(createAdminDto) {
        const { password, confirm_password } = createAdminDto;
        console.log(password);
        if (password !== confirm_password) {
            throw new common_1.BadRequestException('Passwords do not match');
        }
        try {
            const hashed_password = await bcrypt.hash(password, 7);
            const newAdmin = this.adminModel.create({
                ...createAdminDto,
                password: hashed_password,
            });
            const savedAdmin = await this.adminModel.save(newAdmin);
            const tokens = await this.getTokens(savedAdmin);
            const hashed_refresh_token = await bcrypt.hash(tokens.refreshToken, 7);
            savedAdmin.refreshToken = hashed_refresh_token;
            const updatedAdmin = await this.adminModel.save(savedAdmin);
            return { data: 'Admin created successfully', tokens: tokens };
        }
        catch (e) {
            return { error: e.message };
        }
    }
    async signIn(createAuthDto, res) {
        const admin = await this.adminModel.findOne({
            where: { phone: createAuthDto.phone },
        });
        if (!admin) {
            throw new common_1.BadRequestException('User does not exist');
        }
        const passwordMatch = await bcrypt.compare(createAuthDto.password, admin.password);
        if (!passwordMatch) {
            throw new common_1.BadRequestException('Invalid password');
        }
        const tokens = await this.getTokens(admin);
        await this.adminModel.update(admin.id, {
            refreshToken: tokens.refreshToken,
        });
        res.cookie('refresh_token', tokens.refreshToken, {
            maxAge: Number(process.env.COOKIE_TIME),
            httpOnly: true,
        });
        return { tokens, message: 'signed in' };
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(admin_entity_1.Admin)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], AdminService);
//# sourceMappingURL=admin.service.js.map