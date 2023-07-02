import { Body, Controller, Post, Res } from "@nestjs/common";
import { Response } from "express";

import { passwordResetDto, signInDto, signUpDto } from "./dto";

import { AuthService } from "./auth.service";

@Controller("/auth")
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post("/sign-up")
	async signUp(@Body() body: signUpDto, @Res() res: Response) {
		return await this.authService.signUp(body, res);
	}
	@Post("/sign-in")
	async signIn(@Body() body: signInDto, @Res() res: Response) {
		return await this.authService.signIn(body, res);
	}

	@Post("/password-reset")
	async passwordReset(@Body() body: passwordResetDto, @Res() res: Response) {
		return this.authService.passwordReset(body, res);
	}
}
