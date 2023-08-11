import {
	Body,
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	Post,
	Query,
	Req,
	UploadedFile,
	UseInterceptors,
	UsePipes,
} from "@nestjs/common";

import { UserService } from "@modules/user/user.service";
import { FileInterceptor } from "@nestjs/platform-express";

import type { GetUserDto, UpdateUserDto, GetMeDto } from "@modules/user/dto";
import type { FilterDto } from "@root/types";
import { Request } from "express";
import { IntPipe } from "@pipes/int.pipe";

@Controller("/user")
export class UserController {
	constructor(private readonly userService: UserService) {}

	@HttpCode(HttpStatus.OK)
	@Get("/get-me")
	public async getMe(@Query() dto: GetMeDto, @Req() req: Request) {
		return await this.userService.getMe({
			sessionId: dto.sessionId,
			device: req.headers["user-agent"],
		});
	}

	@HttpCode(HttpStatus.OK)
	@Get("/get")
	public async get(@Query() dto: GetUserDto) {
		return await this.userService.get(dto);
	}

	@HttpCode(HttpStatus.OK)
	@Get("/get-all")
	@UsePipes(IntPipe)
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
