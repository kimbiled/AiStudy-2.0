import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { EduService } from "@routes/edu/edu.service";
import { createDto, getAllDto } from "@routes/edu/dto";
import { Response } from "express";

@Controller("/edu")
export class EduController {
	constructor(private eduService: EduService) {}

	@Post("/create")
	async create(@Body() body: createDto, @Res() res: Response) {
		return await this.eduService.create(body, res);
	}

	@Get("/get-all")
	async getAll(@Body() body: getAllDto, @Res() res: Response) {
		return await this.eduService.getAll(body, res);
	}
}
