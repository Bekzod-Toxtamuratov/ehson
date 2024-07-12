"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EhsonTypeModule = void 0;
const common_1 = require("@nestjs/common");
const ehson_type_controller_1 = require("./ehson_type.controller");
const ehson_type_service_1 = require("./ehson_type.service");
const typeorm_1 = require("@nestjs/typeorm");
const ehson_type_entity_1 = require("./entities/ehson_type.entity");
const jwt_1 = require("@nestjs/jwt");
let EhsonTypeModule = class EhsonTypeModule {
};
exports.EhsonTypeModule = EhsonTypeModule;
exports.EhsonTypeModule = EhsonTypeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([ehson_type_entity_1.EhsonType]), jwt_1.JwtModule.register({})],
        controllers: [ehson_type_controller_1.EhsonTypeController],
        providers: [ehson_type_service_1.EhsonTypesService],
    })
], EhsonTypeModule);
//# sourceMappingURL=ehson_type.module.js.map