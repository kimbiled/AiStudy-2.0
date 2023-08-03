import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";

import { ReadingService } from "@modules/reading/reading.service";

import { CreateReadingDto } from "@modules/reading/dto";

@Controller()
export class ReadingController {
	constructor(private readonly readingService: ReadingService) {}

	@HttpCode(HttpStatus.CREATED)
	@Post("/create")
	public async create(@Body() dto: CreateReadingDto) {
		return await this.readingService.create(dto);
	}
}
