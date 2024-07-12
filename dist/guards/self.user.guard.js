"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelfUserGuard = void 0;
const common_1 = require("@nestjs/common");
let SelfUserGuard = class SelfUserGuard {
    canActivate(context) {
        const req = context.switchToHttp().getRequest();
        console.log('req', req.user);
        if (String(req.user.id) != req.params.id) {
            throw new common_1.ForbiddenException({
                message: 'Ruxsat etilmagan user',
            });
        }
        if (req.user.is_active === false) {
            throw new common_1.ForbiddenException({
                message: 'Ruxsat etilmagan user',
            });
        }
        return true;
    }
};
exports.SelfUserGuard = SelfUserGuard;
exports.SelfUserGuard = SelfUserGuard = __decorate([
    (0, common_1.Injectable)()
], SelfUserGuard);
//# sourceMappingURL=self.user.guard.js.map