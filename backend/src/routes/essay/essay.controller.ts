import { Body, Controller, Post, Res } from "@nestjs/common";
import { Response } from "express";

import { EssayService } from "./essay.service";

@Controller("/essay")
export class EssayController {
	constructor(private essayService: EssayService) {}
	@Post("/check")
	async check(@Body() body, @Res() res: Response) {
		return await this.essayService.check(body, res);
	}
	@Post("/create-sat")
	async createSAT(@Res() res: Response) {
		console.log(1);
		return await this.essayService.createSAT(res);
	}
}
