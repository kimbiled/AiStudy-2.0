import { Injectable } from "@nestjs/common";

import { PrismaService } from "@modules/prisma/prisma.service";

import type { CreateReadingDto } from "@modules/reading/dto";

@Injectable()
export class ReadingService {
	constructor(private readonly prismaService: PrismaService) {}
	public async create(dto: CreateReadingDto) {}
}
