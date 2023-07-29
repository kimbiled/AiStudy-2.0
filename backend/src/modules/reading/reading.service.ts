import { Injectable } from "@nestjs/common";

import { CreateReadingDto } from "@modules/reading/dto";

@Injectable()
export class ReadingService {
	public async create(dto: CreateReadingDto) {}
}
