import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { Response } from "express";

import { UserService } from "@routes/user/user.service";

import { getMeDto, getUserDto, updateSettingsDto } from "@routes/user/dto";

@Controller("/user")
export class UserController {
	constructor(private userService: UserService) {}

	@Post("/get-me")
	async getMe(@Body() body: getMeDto, @Res() res: Response) {
		return await this.userService.getMe(body, res);
	}

	@Get("/get-user")
	async getUser(@Body() body: getUserDto, res: Response) {
		return await this.userService.getUser(body, res);
	}

	@Post("/update-settings")
	async updateSettings(@Body() body: updateSettingsDto, @Res() res: Response) {
		return await this.userService.updateSettings(body, res);
	}
}
