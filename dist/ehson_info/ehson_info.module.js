"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EhsonInfoModule = void 0;
const common_1 = require("@nestjs/common");
const ehson_info_service_1 = require("./ehson_info.service");
const ehson_info_controller_1 = require("./ehson_info.controller");
const ehson_info_entity_1 = require("./entities/ehson_info.entity");
const typeorm_1 = require("@nestjs/typeorm");
const jwt_1 = require("@nestjs/jwt");
let EhsonInfoModule = class EhsonInfoModule {
};
exports.EhsonInfoModule = EhsonInfoModule;
exports.EhsonInfoModule = EhsonInfoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([ehson_info_entity_1.EhsonInfo]), jwt_1.JwtModule.register({})],
        controllers: [ehson_info_controller_1.EhsonInfoController],
        providers: [ehson_info_service_1.EhsonInfoService],
    })
], EhsonInfoModule);
//# sourceMappingURL=ehson_info.module.js.map