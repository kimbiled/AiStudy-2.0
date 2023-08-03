import {
	ConflictException,
	Injectable,
	InternalServerErrorException,
	NotFoundException,
	UnauthorizedException,
} from "@nestjs/common";

import { PrismaService } from "@modules/prisma/prisma.service";

import { StringHelper } from "@helper/string/string.helper";

import { CreateUserDto, GetUserDto, ValidateUserDto } from "@modules/user/dto";
import { SessionService } from "@modules/session/session.service";
import { GetSessionDto } from "@modules/session/dto";
import { FilterDto } from "@root/types";
import { ObjectHelper } from "@helper/object/object.helper";

@Injectable()
export class UserService {
	constructor(
		private readonly prismaService: PrismaService,
		private readonly sessionService: SessionService,
		private readonly stringHelper: StringHelper,
		private readonly objectHelper: ObjectHelper
	) {}

	public async create(dto: CreateUserDto) {
		dto.email = this.stringHelper.normalizer(dto.email);
		dto.username = this.stringHelper.normalizer(dto.username);

		const exist = await this.prismaService.user.findMany({
			where: {
				email: dto.email,
				username: dto.username,
			},
		});

		if (exist && exist.length > 0) throw new ConflictException("User already exist");

		dto.password = this.stringHelper.hash(dto.password);
		return await this.prismaService.user
			.create({
				data: dto,
			})
			.then((user) => {
				return user;
			})
			.catch((error) => {
				throw new InternalServerErrorException(error);
			});
	}

	public async validate(dto: ValidateUserDto) {
		dto.username = this.stringHelper.normalizer(dto.username);

		const user = await this.prismaService.user.findUnique({
			where: {
				username: dto.username,
			},
		});
		if (!user) throw new NotFoundException("User not found");

		const comparePassword: boolean = this.stringHelper.compare(dto.password, user.password);
		if (!comparePassword) throw new UnauthorizedException("Password is incorrect");

		return user;
	}

	public async getMe(dto: GetSessionDto) {
		const session = await this.sessionService.get(dto);

		return await this.prismaService.user
			.findUnique({
				where: {
					id: session.userId,
				},
			})
			.then((user) => {
				delete user.password;
				return user;
			})
			.catch((error) => {
				throw new InternalServerErrorException(error);
			});
	}

	public async get(dto: GetUserDto) {
		dto.username = this.stringHelper.normalizer(dto.username);

		return await this.prismaService.user
			.findUnique({
				where: {
					username: dto.username,
				},
			})
			.then((user) => {
				if (!user) throw new NotFoundException("User not found");

				delete user.password;
				return user;
			})
			.catch((error) => {
				throw new InternalServerErrorException(error);
			});
	}

	public async getAll(dto: FilterDto) {
		dto = this.objectHelper.removeNulls(dto);
		dto = this.objectHelper.parseNumbers(dto);

		return await this.prismaService.user
			.findMany({
				...dto,
			})
			.then((users) => {
				for (const user of users) {
					delete user.password;
				}

				return users;
			})
			.catch((error) => {
				throw new InternalServerErrorException(error);
			});
	}
}
