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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const bcrypt = require("bcrypt");
const login_dto_1 = require("./dto/login.dto");
const jwt_1 = require("@nestjs/jwt");
let UserService = class UserService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async getTokens(user) {
        const payload = {
            id: user.id,
            is_active: user.is_ative,
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
    async login(loginDto, res) {
        try {
            const user = await this.userRepository.findOne({
                where: { phone: loginDto.phone },
            });
            if (!user) {
                throw new common_1.BadRequestException('Invalid credentials');
            }
            const passwordMatch = await bcrypt.compare(loginDto.password, user.password);
            if (!passwordMatch) {
                throw new common_1.BadRequestException('Invalid credentials');
            }
            const tokens = await this.getTokens(user);
            await this.userRepository.update(user.id, {
                refreshToken: tokens.refreshToken,
            });
            res.cookie('refresh_token', tokens.refreshToken, {
                maxAge: Number(process.env.COOKIE_TIME),
                httpOnly: true,
            });
            return { tokens, message: 'Login successful' };
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async logout(refreshToken, res) {
        try {
            const userData = await this.jwtService.verify(refreshToken, {
                secret: process.env.REFRESH_TOKEN_KEY,
            });
            if (!userData) {
                throw new common_1.BadRequestException('User not verified');
            }
            const updatedUser = await this.userRepository.update({ id: userData.id }, { refreshToken: null });
            if (updatedUser.affected === 0) {
                throw new common_1.BadRequestException('User not found or not updated');
            }
            res.clearCookie('refresh_token');
            const response = {
                message: 'User logged out successfully',
            };
            return response;
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to logout');
        }
    }
    async create(createUserDto) {
        const { password, confirm_password } = createUserDto;
        console.log(password);
        if (password !== confirm_password) {
            throw new common_1.BadRequestException('Passwords do not match');
        }
        try {
            const hashed_password = await bcrypt.hash(password, 7);
            const newUser = this.userRepository.create({
                ...createUserDto,
                password: hashed_password,
            });
            const savedUser = await this.userRepository.save(newUser);
            const tokens = await this.getTokens(savedUser);
            const hashed_refresh_token = await bcrypt.hash(tokens.refreshToken, 7);
            savedUser.refreshToken = hashed_refresh_token;
            const updatedUser = await this.userRepository.save(savedUser);
            return { data: 'User created successfully', tokens: tokens };
        }
        catch (e) {
            return { error: e.message };
        }
    }
    async findAll() {
        return this.userRepository.find();
    }
    async findOne(id) {
        try {
            const user = await this.userRepository.findOne({
                where: { id },
            });
            if (!user) {
                throw new common_1.NotFoundException(`User with ID ${id} not found`);
            }
            return user;
        }
        catch (e) {
            return { error: e.message };
        }
    }
    async update(id, updateUserDto) {
        try {
            const { password } = updateUserDto;
            const hashed_password = await bcrypt.hash(password, 7);
            await this.userRepository.update({ id }, { ...updateUserDto, password: hashed_password });
            return this.findOne(id);
        }
        catch (e) {
            return { error: e.message };
        }
    }
    async remove(id) {
        const userToRemove = await this.findOne(id);
        if ('error' in userToRemove) {
            return userToRemove;
        }
        return this.userRepository.remove([userToRemove]);
    }
};
exports.UserService = UserService;
__decorate([
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.UserLoginDto, Object]),
    __metadata("design:returntype", Promise)
], UserService.prototype, "login", null);
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], UserService);
//# sourceMappingURL=users.service.js.map