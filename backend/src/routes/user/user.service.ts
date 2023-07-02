import { HttpStatus, Injectable } from "@nestjs/common";
import { Response } from "express";

import { getMeDto, getUserDto, updateSettingsDto } from "@routes/user/dto";

import { PrismaService } from "@root/prisma/prisma.service";

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}
	async getMe({ accessToken, refreshToken }: getMeDto, res: Response) {
		try {
			if (!accessToken && !refreshToken)
				return res.status(HttpStatus.UNAUTHORIZED).json({ message: "No jwt provided" });
			if (!res.locals.id) return;
			const user = await this.prisma.user.findUnique({
				where: {
					id: res.locals.id,
				},
			});
			if (!user) return res.status(HttpStatus.NOT_FOUND).json({ message: "User not found" });

			delete user.password;
			delete user.refreshToken;

			return res.status(HttpStatus.OK).json({ user, accessToken, refreshToken });
		} catch (error) {
			console.log(error);
		}
	}
	async getUser({ id }: getUserDto, res: Response) {
		const user = await this.prisma.user.findUnique({
			where: {
				id: id,
			},
		});
		if (!user) return res.status(HttpStatus.NOT_FOUND).json({ message: "User not found" });

		delete user.password;
		delete user.refreshToken;

		return res.status(HttpStatus.OK).json({ user });
	}
	async updateSettings({ id, firstName, lastName, bio }: updateSettingsDto, res: Response) {
		await this.prisma.user.update({
			where: {
				id: id,
			},
			data: {
				firstName: firstName,
				lastName: lastName,
				bio: bio,
			},
		});

		return res.status(HttpStatus.OK).json({ message: "User settings are updated" });
	}
}
