"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSocialDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_social_dto_1 = require("./create-social.dto");
class UpdateSocialDto extends (0, swagger_1.PartialType)(create_social_dto_1.CreateSocialDto) {
}
exports.UpdateSocialDto = UpdateSocialDto;
//# sourceMappingURL=update-social.dto.js.map