"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialDistributorModule = void 0;
const common_1 = require("@nestjs/common");
const social_distributor_service_1 = require("./social_distributor.service");
const social_distributor_controller_1 = require("./social_distributor.controller");
const typeorm_1 = require("@nestjs/typeorm");
const social_distributor_entity_1 = require("./entities/social_distributor.entity");
const social_entity_1 = require("../social/entities/social.entity");
const distributor_entity_1 = require("../distributors/entities/distributor.entity");
const jwt_1 = require("@nestjs/jwt");
let SocialDistributorModule = class SocialDistributorModule {
};
exports.SocialDistributorModule = SocialDistributorModule;
exports.SocialDistributorModule = SocialDistributorModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([social_distributor_entity_1.SocialDistributor]),
            social_entity_1.Social,
            distributor_entity_1.Distributor,
            jwt_1.JwtModule.register({}),
        ],
        controllers: [social_distributor_controller_1.SocialDistributorController],
        providers: [social_distributor_service_1.SocialDistributorService],
    })
], SocialDistributorModule);
//# sourceMappingURL=social_distributor.module.js.map