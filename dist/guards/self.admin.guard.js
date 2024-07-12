"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelfAdminGuard = void 0;
const common_1 = require("@nestjs/common");
let SelfAdminGuard = class SelfAdminGuard {
    canActivate(context) {
        const req = context.switchToHttp().getRequest();
        console.log('req', req.admin);
        console.log('req.admin ', req.admin);
        console.log('req.params.id  ', req.params.id);
        console.log('req.admin.id  ', req.params.id);
        if (String(req.admin.id) != req.params.id) {
            throw new common_1.ForbiddenException({
                message: 'Ruxsat etilmagan admin',
            });
        }
        if (req.admin.is_active === false || req.admin.is_creator == true) {
            throw new common_1.ForbiddenException({
                message: 'Ruxsat etilmagan admin',
            });
        }
        return true;
    }
};
exports.SelfAdminGuard = SelfAdminGuard;
exports.SelfAdminGuard = SelfAdminGuard = __decorate([
    (0, common_1.Injectable)()
], SelfAdminGuard);
//# sourceMappingURL=self.admin.guard.js.map