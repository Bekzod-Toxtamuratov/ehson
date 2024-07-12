"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cookiegetter = void 0;
const common_1 = require("@nestjs/common");
exports.Cookiegetter = (0, common_1.createParamDecorator)(async (data, context) => {
    const request = context.switchToHttp().getRequest();
    const refresh_token = request.cookies[data];
    if (!refresh_token) {
        throw new common_1.UnauthorizedException('Token is not found');
    }
    return refresh_token;
});
//# sourceMappingURL=cookie_getter.decorator.js.map