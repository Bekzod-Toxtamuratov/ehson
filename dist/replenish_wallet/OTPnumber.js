"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.otpGenerator = void 0;
function otpGenerator(length) {
    const numbers = '0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    return result;
}
exports.otpGenerator = otpGenerator;
//# sourceMappingURL=OTPnumber.js.map