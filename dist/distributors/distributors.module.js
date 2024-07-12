"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistributorsModule = void 0;
const common_1 = require("@nestjs/common");
const distributors_service_1 = require("./distributors.service");
const distributors_controller_1 = require("./distributors.controller");
const typeorm_1 = require("@nestjs/typeorm");
const distributor_entity_1 = require("./entities/distributor.entity");
const jwt_1 = require("@nestjs/jwt");
let DistributorsModule = class DistributorsModule {
};
exports.DistributorsModule = DistributorsModule;
exports.DistributorsModule = DistributorsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([distributor_entity_1.Distributor]), jwt_1.JwtModule.register({})],
        controllers: [distributors_controller_1.DistributorsController],
        providers: [distributors_service_1.DistributorsService],
    })
], DistributorsModule);
//# sourceMappingURL=distributors.module.js.map