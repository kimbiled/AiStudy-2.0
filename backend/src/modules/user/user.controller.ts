import { Controller, Get, HttpCode, HttpStatus, Query } from "@nestjs/common";

import { UserService } from "@modules/user/user.service";

import type { ValidateSessionDto } from "@modules/session/dto";
import type { GetUserDto } from "@modules/user/dto";
import type { FilterDto } from "@root/types";

@Controller("/user")
export class UserController {
	constructor(private readonly userService: UserService) {}

	@HttpCode(HttpStatus.OK)
	@Get("/get-me")
	public async getMe(@Query() dto: ValidateSessionDto) {
		return await this.userService.getMe(dto);
	}

	@HttpCode(HttpStatus.OK)
	@Get("/get")
	public async get(@Query() dto: GetUserDto) {
		return await this.userService.get(dto);
	}

	@HttpCode(HttpStatus.OK)
	@Get("/get-all")
	public async getAll(@Query() dto: FilterDto) {
		return await this.userService.getAll(dto);
	}
}
