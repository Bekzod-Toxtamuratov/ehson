"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessfullyCompletedModule = void 0;
const common_1 = require("@nestjs/common");
const successfully_completed_service_1 = require("./successfully_completed.service");
const successfully_completed_controller_1 = require("./successfully_completed.controller");
const typeorm_1 = require("@nestjs/typeorm");
const successfully_completed_entity_1 = require("./entities/successfully_completed.entity");
const jwt_1 = require("@nestjs/jwt");
let SuccessfullyCompletedModule = class SuccessfullyCompletedModule {
};
exports.SuccessfullyCompletedModule = SuccessfullyCompletedModule;
exports.SuccessfullyCompletedModule = SuccessfullyCompletedModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([successfully_completed_entity_1.SuccessfullyCompleted]),
            jwt_1.JwtModule.register({}),
        ],
        controllers: [successfully_completed_controller_1.SuccessfullyCompletedController],
        providers: [successfully_completed_service_1.SuccessfullyCompletedService],
    })
], SuccessfullyCompletedModule);
//# sourceMappingURL=successfully_completed.module.js.map