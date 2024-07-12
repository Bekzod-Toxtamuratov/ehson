"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("./users/users.module");
const ehson_info_module_1 = require("./ehson_info/ehson_info.module");
const successfully_completed_module_1 = require("./successfully_completed/successfully_completed.module");
const admin_module_1 = require("./admin/admin.module");
const distributors_module_1 = require("./distributors/distributors.module");
const admin_entity_1 = require("./admin/entities/admin.entity");
const distributor_entity_1 = require("./distributors/entities/distributor.entity");
const wallet_module_1 = require("./wallet/wallet.module");
const user_cards_module_1 = require("./user_cards/user_cards.module");
const transaction_history_module_1 = require("./transaction_history/transaction_history.module");
const ehson_type_module_1 = require("./ehson_type/ehson_type.module");
const social_module_1 = require("./social/social.module");
const ehson_info_entity_1 = require("./ehson_info/entities/ehson_info.entity");
const ehson_type_entity_1 = require("./ehson_type/entities/ehson_type.entity");
const social_entity_1 = require("./social/entities/social.entity");
const successfully_completed_entity_1 = require("./successfully_completed/entities/successfully_completed.entity");
const user_card_entity_1 = require("./user_cards/entities/user_card.entity");
const user_entity_1 = require("./users/entities/user.entity");
const wallet_entity_1 = require("./wallet/entities/wallet.entity");
const transaction_history_entity_1 = require("./transaction_history/entities/transaction_history.entity");
const social_distributor_module_1 = require("./social_distributor/social_distributor.module");
const social_distributor_entity_1 = require("./social_distributor/entities/social_distributor.entity");
const replenish_wallet_module_1 = require("./replenish_wallet/replenish_wallet.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT),
                username: process.env.DB_USER,
                password: process.env.DB_PASS,
                database: process.env.DB_NAME,
                entities: [
                    admin_entity_1.Admin,
                    distributor_entity_1.Distributor,
                    ehson_info_entity_1.EhsonInfo,
                    ehson_type_entity_1.EhsonType,
                    social_entity_1.Social,
                    successfully_completed_entity_1.SuccessfullyCompleted,
                    user_card_entity_1.UserCard,
                    user_entity_1.User,
                    wallet_entity_1.Wallet,
                    transaction_history_entity_1.TransactionHistory,
                    social_distributor_entity_1.SocialDistributor,
                ],
                synchronize: true,
                logging: false,
            }),
            users_module_1.UsersModule,
            ehson_info_module_1.EhsonInfoModule,
            successfully_completed_module_1.SuccessfullyCompletedModule,
            admin_module_1.AdminModule,
            distributors_module_1.DistributorsModule,
            wallet_module_1.WalletModule,
            user_cards_module_1.UserCardsModule,
            transaction_history_module_1.TransactionHistoryModule,
            ehson_type_module_1.EhsonTypeModule,
            social_module_1.SocialModule,
            social_distributor_module_1.SocialDistributorModule,
            replenish_wallet_module_1.ReplenishWalletModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map