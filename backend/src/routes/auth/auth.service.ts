import { HttpStatus, Injectable } from "@nestjs/common";
import { Response } from "express";
import { compareSync, hashSync } from "bcryptjs";
import { verify } from "jsonwebtoken";
import * as crypto from "crypto";

import { passwordResetDto, signInDto, signUpDto } from "./dto";

import { PrismaService } from "@root/prisma/prisma.service";
import { GmailService } from "@api/google/gmail/gmail.service";

import config from "@root/config";

import { strHelper } from "@root/helpers/string";
import { tokenHelper } from "@root/helpers/token";

@Injectable()
export class AuthService {
	private strHelper: strHelper = new strHelper();
	private tokenHelper: tokenHelper = new tokenHelper();

	private pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/gim;

	constructor(private prisma: PrismaService, private gmail: GmailService) {}

	async signUp({ username, email, password }: signUpDto, res: Response) {
		const normalizedUsername = this.strHelper.normalizer(username);
		const normalizedEmail = this.strHelper.normalizer(email);

		const exist = await this.prisma.user.findFirst({
			where: {
				username: normalizedUsername,
				email: normalizedEmail,
			},
		});
		if (exist) return res.status(HttpStatus.CONFLICT).json({ message: "User already exist" });

		if (!this.strHelper.check(password, this.pattern))
			return res.status(HttpStatus.CONTINUE).json({ message: "Weak password" });

		const hashedPassword: string = hashSync(password);

		const refreshToken: string = this.tokenHelper.createRT();
		const user = await this.prisma.user.create({
			data: {
				username: normalizedUsername,
				email: normalizedEmail,
				password: hashedPassword,
				refreshToken: refreshToken,
			},
		});
		const accessToken: string = this.tokenHelper.createAT(user.id);
		return res
			.status(HttpStatus.CREATED)
			.json({ message: "User successfully created", data: { accessToken, refreshToken } });
	}
	async signIn({ username, password }: signInDto, res: Response) {
		const normalizedUsername = this.strHelper.normalizer(username);

		const user = await this.prisma.user.findUnique({
			where: {
				username: normalizedUsername,
			},
		});
		if (!user) return res.status(HttpStatus.NOT_FOUND).json({ message: "User not found" });

		const comparePassword: boolean = compareSync(password, user.password);
		if (!comparePassword) return res.status(HttpStatus.UNAUTHORIZED).json({ message: "Incorrect password" });

		let refreshToken: string;
		verify(user.refreshToken, config.RT_JWT_SALT, (error) => {
			if (error) refreshToken = this.tokenHelper.createRT();
			else {
				refreshToken = user.refreshToken;
			}
		});
		const accessToken = this.tokenHelper.createAT(user.id);

		return res.status(HttpStatus.OK).json({ accessToken, refreshToken });
	}

	async passwordReset({ email }: passwordResetDto, res: Response) {
		const normalizedEmail: string = this.strHelper.normalizer(email);

		const user = await this.prisma.user.findUnique({
			where: {
				email: normalizedEmail,
			},
		});

		if (!user) return res.status(HttpStatus.NOT_FOUND).json({ message: "User with this email is not found" });

		const newPassword: string = crypto.randomBytes(5).toString("hex");
		const hashedPassword: string = hashSync(newPassword);

		await this.prisma.user.update({
			where: {
				email: normalizedEmail,
			},
			data: {
				password: hashedPassword,
			},
		});

		await this.gmail.send({
			to: normalizedEmail,
			subject: "why you forgot your password",
			html: `<p>New password: <h1>${newPassword}</h1></p>`,
		});

		return res.status(HttpStatus.OK).json({ message: "Password was successfully reset" });
	}
}
