import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { ReadingService } from "@modules/reading/reading.service";

import type { CreateReadingDto } from "@modules/reading/dto";

@ApiTags("/reading")
@Controller("/reading")
export class ReadingController {
	constructor(private readonly readingService: ReadingService) {}

	@HttpCode(HttpStatus.CREATED)
	@Post("/create")
	public async create(@Body() dto: CreateReadingDto) {
		return await this.readingService.create(dto);
	}
}
