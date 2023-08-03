import { Injectable, InternalServerErrorException } from "@nestjs/common";

import { CreateSessionDto, GetSessionDto, RevokeSessionDto } from "@modules/session/dto";
import { PrismaService } from "@modules/prisma/prisma.service";

@Injectable()
export class SessionService {
	private readonly updateDate: Date = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 7);

	constructor(private readonly prismaService: PrismaService) {}

	public async create(dto: CreateSessionDto) {
		dto.ip = dto.ip.replace(/[^\d.]/g, "");

		return await this.prismaService.session
			.create({
				data: {
					user: {
						connect: {
							id: dto.userId,
						},
					},
					ip: dto.ip,
					device: dto.device,
					expirationDate: this.updateDate,
				},
			})
			.then((session) => {
				return session;
			})
			.catch((error) => {
				throw new InternalServerErrorException(error);
			});
	}

	public async get(dto: GetSessionDto) {
		return await this.prismaService.session
			.findUnique({
				where: {
					id: dto.sessionId,
				},
			})
			.catch((error) => {
				throw new InternalServerErrorException(error);
			});
	}

	public async revoke(dto: RevokeSessionDto) {
		await this.prismaService.session
			.delete({
				where: {
					id: dto.sessionId,
				},
			})
			.catch((error) => {
				throw new InternalServerErrorException(error);
			});
	}
}
