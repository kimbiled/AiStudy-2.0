import { Injectable, InternalServerErrorException } from "@nestjs/common";

import { PrismaService } from "@modules/prisma/prisma.service";
import { StorageService } from "@api/google/storage/storage.service";
import { VertexService } from "@api/google/vertex/vertex.service";

import { ObjectHelper } from "@helper/object/object.helper";

import type { CreateWritingDto } from "@modules/writing/dto";
import type { FilterDto } from "@root/types";
import { CheckWritingDto } from "@modules/writing/dto";

@Injectable()
export class WritingService {
	constructor(
		private readonly prismaService: PrismaService,
		private readonly storageService: StorageService,
		private readonly vertexService: VertexService,
		private readonly objectHelper: ObjectHelper
	) {}

	public async create(dto: CreateWritingDto, file?: Express.Multer.File) {
		dto = <CreateWritingDto>this.objectHelper.parseNumbers(dto);

		if (dto.taskType === 1 && file)
			await this.storageService.upload(file, "writing").then((response) => {
				dto.path = response;
			});

		return await this.prismaService.writing
			.create({
				data: {
					taskType: dto.taskType,
					thesis: dto.thesis,
					path: dto.path,
				},
			})
			.then((writing) => {
				return writing;
			})
			.catch((error) => {
				console.log(error);
				throw new InternalServerErrorException(error);
			});
	}

	public async getAll(dto: FilterDto) {
		dto = this.objectHelper.removeNulls(dto);
		dto = this.objectHelper.parseNumbers(dto);

		return await this.prismaService.writing
			.findMany({
				...dto,
			})
			.then((writings) => {
				return writings;
			})
			.catch((error) => {
				throw new InternalServerErrorException(error);
			});
	}

	public async check(dto: CheckWritingDto) {
		return await this.vertexService.chat(dto.content);
	}
}
