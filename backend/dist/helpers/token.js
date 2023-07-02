"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenHelper = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const crypto = require("crypto");
const config_1 = require("../config");
class tokenHelper {
    createAT(uid) {
        return (0, jsonwebtoken_1.sign)({ id: uid }, config_1.default.AT_JWT_SALT, {
            expiresIn: 60 * 15,
        });
    }
    createRT() {
        return (0, jsonwebtoken_1.sign)({ random: crypto.randomUUID() }, config_1.default.RT_JWT_SALT, {
            expiresIn: 60 * 60 * 24 * 7,
        });
    }
}
exports.tokenHelper = tokenHelper;
//# sourceMappingURL=token.js.map