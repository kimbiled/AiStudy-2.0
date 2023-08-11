import { Body, Controller, Get, HttpCode, HttpStatus, Post, Query, UsePipes } from "@nestjs/common";

import { SpeakingService } from "@modules/speaking/speaking.service";

import { IntPipe } from "@pipes/int.pipe";

import type { CreateSpeakingDto } from "@modules/speaking/dto";
import type { FilterDto } from "@root/types";

@Controller("/speaking")
export class SpeakingController {
	constructor(private readonly speakingService: SpeakingService) {}

	@HttpCode(HttpStatus.CREATED)
	@Post("/create")
	public async create(@Body() dto: CreateSpeakingDto) {
		return await this.speakingService.create(dto);
	}

	@HttpCode(HttpStatus.OK)
	@Get("/get-all")
	@UsePipes(IntPipe)
	public async getAll(@Query() dto: FilterDto) {
		return await this.speakingService.getAll(dto);
	}
}
