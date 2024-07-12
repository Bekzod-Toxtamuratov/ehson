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
exports.UserCardsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_card_entity_1 = require("./entities/user_card.entity");
let UserCardsService = class UserCardsService {
    constructor(userCardsRepository) {
        this.userCardsRepository = userCardsRepository;
    }
    async create(createUserCardDto, req) {
        try {
            const myCookie = req.cookies['refresh_token'];
            console.log(myCookie);
            if (!myCookie) {
                throw new Error('Refresh token cookie not found');
            }
            let userId;
            try {
                const [headerB64, payloadB64, signature] = myCookie.split('.');
                const payload = Buffer.from(payloadB64, 'base64').toString('utf-8');
                const payloadData = JSON.parse(payload);
                userId = payloadData.id;
                console.log(userId);
            }
            catch (error) {
                throw new Error('Invalid JSON format in refresh token cookie');
            }
            if (!userId) {
                throw new Error('User ID not found in refresh token cookie');
            }
            const userCardData = { ...createUserCardDto, user_id: userId };
            const userCard = this.userCardsRepository.create(userCardData);
            return this.userCardsRepository.save(userCard);
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    async findAll() {
        return this.userCardsRepository.find({ relations: ['user_id'] });
    }
    async findOne(id) {
        try {
            const userCards = await this.userCardsRepository.findOne({
                where: { id },
            });
            if (!userCards) {
                throw new common_1.NotFoundException(`UserCards with ID ${id} not found`);
            }
            return userCards;
        }
        catch (e) {
            return { error: e.message };
        }
    }
    async update(id, updateUserCardsDto) {
        try {
            await this.userCardsRepository.update({ id }, updateUserCardsDto);
            return this.findOne(id);
        }
        catch (e) {
            return { error: e.message };
        }
    }
    async remove(id) {
        const userCardsToRemove = await this.findOne(id);
        if ('error' in userCardsToRemove) {
            return userCardsToRemove;
        }
        return this.userCardsRepository.remove([userCardsToRemove]);
    }
};
exports.UserCardsService = UserCardsService;
exports.UserCardsService = UserCardsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_card_entity_1.UserCard)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserCardsService);
//# sourceMappingURL=user_cards.service.js.map