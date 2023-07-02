"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMiddleware = void 0;
const common_1 = require("@nestjs/common");
const jsonwebtoken_1 = require("jsonwebtoken");
const token_1 = require("../../helpers/token");
const config_1 = require("../../config");
class UserMiddleware {
    constructor(prisma) {
        this.prisma = prisma;
        this.tokenHelper = new token_1.tokenHelper();
    }
    use(req, res, next) {
        let { accessToken, refreshToken } = req.body;
        if (!accessToken)
            return;
        if (!refreshToken)
            return;
        let userId = "";
        (0, jsonwebtoken_1.verify)(accessToken, config_1.default.AT_JWT_SALT, async (error, decoded) => {
            try {
                if (error) {
                    const user = await this.prisma.user
                        .findUnique({
                        where: {
                            refreshToken: refreshToken,
                        },
                    })
                        .then((user) => {
                        return user;
                    })
                        .catch((error) => {
                        console.log(error);
                        return null;
                    });
                    if (!user)
                        return res.status(common_1.HttpStatus.NOT_FOUND).json({ message: "Not found" });
                    accessToken = this.tokenHelper.createAT(user.id);
                    userId = user.id;
                }
                else {
                    userId = decoded.id;
                }
            }
            catch (error) {
                console.log(error);
                return res.status(common_1.HttpStatus.CONFLICT).json({ message: "Token error" });
            }
        });
        res.locals = {
            id: userId,
        };
        next();
    }
}
exports.UserMiddleware = UserMiddleware;
//# sourceMappingURL=user.middleware.js.map