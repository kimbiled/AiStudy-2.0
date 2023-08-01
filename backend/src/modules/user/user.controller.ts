import {
	Body,
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	Post,
	Query,
	UploadedFile,
	UseInterceptors,
} from "@nestjs/common";

import { UserService } from "@modules/user/user.service";
import { FileInterceptor } from "@nestjs/platform-express";

import type { ValidateSessionDto } from "@modules/session/dto";
import type { GetUserDto } from "@modules/user/dto";
import type { FilterDto } from "@root/types";
import { UpdateUserDto } from "@modules/user/dto";

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

	@HttpCode(HttpStatus.OK)
	@Post("/update")
	@UseInterceptors(FileInterceptor("file"))
	public async update(@Body() dto: UpdateUserDto, @UploadedFile() file?: Express.Multer.File) {
		return await this.userService.update(dto, file);
	}
}
