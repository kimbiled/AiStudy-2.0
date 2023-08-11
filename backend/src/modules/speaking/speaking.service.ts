import { Injectable, InternalServerErrorException } from "@nestjs/common";

import { PrismaService } from "@modules/prisma/prisma.service";

import type { CreateSpeakingDto } from "@modules/speaking/dto";
import type { FilterDto } from "@root/types";

@Injectable()
export class SpeakingService {
	constructor(private readonly prismaService: PrismaService) {}

	public async create(dto: CreateSpeakingDto) {
		return await this.prismaService.speaking
			.create({
				data: {
					thesis: dto.thesis,
				},
			})
			.then((speaking) => {
				return speaking;
			})
			.catch((error) => {
				console.log(error);
				throw new InternalServerErrorException(error);
			});
	}

	public async getAll(dto: FilterDto) {
		return await this.prismaService.speaking
			.findMany(dto)
			.then((speakings) => {
				return speakings;
			})
			.catch((error) => {
				console.log(error);
				throw new InternalServerErrorException(error);
			});
	}
}
