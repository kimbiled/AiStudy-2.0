import { Body, Controller, HttpCode, HttpStatus, Post, Req } from "@nestjs/common";

import { AuthService } from "@modules/auth/auth.service";

import { CreateUserDto, ValidateUserDto } from "@modules/user/dto";
import { Request } from "express";
import { RevokeSessionDto } from "@modules/session/dto";

@Controller("/auth")
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@HttpCode(HttpStatus.CREATED)
	@Post("/local/sign-up")
	public async localSignUp(@Body() dto: CreateUserDto, @Req() req: Request) {
		return await this.authService.localSignUp(dto, req.ip, req.headers["user-agent"]);
	}

	@HttpCode(HttpStatus.OK)
	@Post("/local/sign-up")
	public async localSignIn(@Body() dto: ValidateUserDto, @Req() req: Request) {
		return await this.authService.localSignIn(dto, req.ip, req.headers["user-agent"]);
	}

	@HttpCode(HttpStatus.OK)
	@Post("/log-out")
	public async logOut(@Body() dto: RevokeSessionDto) {
		return await this.authService.logOut(dto);
	}
}
