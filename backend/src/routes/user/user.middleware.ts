import { HttpStatus, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { tokenHelper } from "@root/helpers/token";

import { getMeDto } from "@routes/user/dto";

import { PrismaService } from "@root/prisma/prisma.service";

import config from "@root/config";

export class UserMiddleware implements NestMiddleware {
	private tokenHelper: tokenHelper = new tokenHelper();
	constructor(private prisma: PrismaService) {}

	use(req: Request, res: Response, next: NextFunction) {
		let { accessToken, refreshToken }: getMeDto = req.body;

		if (!accessToken) return;
		if (!refreshToken) return;

		let userId = "";
		verify(accessToken, config.AT_JWT_SALT, async (error, decoded) => {
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
					if (!user) return res.status(HttpStatus.NOT_FOUND).json({ message: "Not found" });

					accessToken = this.tokenHelper.createAT(user.id);
					userId = user.id;
				} else {
					userId = (decoded as { id: string }).id;
				}
			} catch (error) {
				console.log(error);
				return res.status(HttpStatus.CONFLICT).json({ message: "Token error" });
			}
		});

		res.locals = {
			id: userId,
		};
		next();
	}
}
