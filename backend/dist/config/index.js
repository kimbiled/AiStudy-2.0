"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const process = require("process");
exports.default = {
    HOST: process.env.BACKEND_HOST,
    PORT: parseInt(process.env.BACKEND_PORT),
    RT_JWT_SALT: process.env.BACKEND_RT_JWT_SALT,
    AT_JWT_SALT: process.env.BACKEND_AT_JWT_SALT,
};
//# sourceMappingURL=index.js.map