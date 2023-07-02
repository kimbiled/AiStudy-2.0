import { HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "@root/prisma/prisma.service";

import { createDto, getAllDto } from "./dto";
import { Response } from "express";

@Injectable()
export class EduService {
	constructor(private prisma: PrismaService) {}

	async create({ title, description, date, type, url }: createDto, res: Response) {
		const edu = await this.prisma.edu.create({
			data: {
				title: title,
				description: description,
				date: date,
				type: type,
				url: url,
			},
		});
		return res.status(HttpStatus.CREATED).json({ edu });
	}
	async getAll({ skip, limit }: getAllDto, res: Response) {
		const edu = await this.prisma.edu.findMany({
			skip: skip,
			take: limit,
		});

		return res.status(HttpStatus.OK).json({ edu });
	}
}
