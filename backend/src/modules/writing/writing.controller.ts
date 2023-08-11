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
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiTags } from "@nestjs/swagger";

import { WritingService } from "@modules/writing/writing.service";

import { CheckWritingDto, CreateWritingDto } from "@modules/writing/dto";
import { FilterDto } from "@root/types";

@ApiTags("/writing")
@Controller("/writing")
export class WritingController {
	constructor(private readonly writingService: WritingService) {}

	@HttpCode(HttpStatus.CREATED)
	@Post("/create")
	@UseInterceptors(FileInterceptor("file"))
	public async create(@Body() dto: CreateWritingDto, @UploadedFile() file?: Express.Multer.File) {
		return await this.writingService.create(dto, file);
	}

	@HttpCode(HttpStatus.OK)
	@Get("/get-all")
	public async getAll(@Query() dto: FilterDto) {
		return await this.writingService.getAll(dto);
	}

	@HttpCode(HttpStatus.OK)
	@Post("/check")
	public async check(@Body() dto: CheckWritingDto) {
		return await this.writingService.check(dto);
	}
}
