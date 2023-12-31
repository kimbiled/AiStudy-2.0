import {
	ConflictException,
	Injectable,
	InternalServerErrorException,
	NotFoundException,
	UnauthorizedException,
} from "@nestjs/common";

import { PrismaService } from "@modules/prisma/prisma.service";
import { SessionService } from "@modules/session/session.service";
import { StorageService } from "@api/google/storage/storage.service";
import { GmailService } from "@api/google/gmail/gmail.service";

import { StringHelper } from "@helper/string/string.helper";

import type { CreateUserDto, GetUserDto, UpdateUserDto, ValidateUserDto } from "@modules/user/dto";
import type { ValidateSessionDto } from "@modules/session/dto";
import type { FilterDto } from "@root/types";
import type { VerifyMailDto } from "@modules/user/dto";

@Injectable()
export class UserService {
	constructor(
		private readonly prismaService: PrismaService,
		private readonly sessionService: SessionService,
		private readonly storageService: StorageService,
		private readonly gmailService: GmailService,
		private readonly stringHelper: StringHelper
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
				console.log(error);
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

	public async getMe(dto: ValidateSessionDto) {
		const session = await this.sessionService.validate(dto);

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
				console.log(error);
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
				console.log(error);
				throw new InternalServerErrorException(error);
			});
	}

	public async getAll(dto: FilterDto) {
		return await this.prismaService.user
			.findMany(dto)
			.then((users) => {
				for (const user of users) {
					delete user.password;
				}

				return users;
			})
			.catch((error) => {
				console.log(error);
				throw new InternalServerErrorException(error);
			});
	}

	public async update(dto: UpdateUserDto, file?: Express.Multer.File) {
		let profileImagePath: string;

		if (file) {
			file.originalname = dto.userId;
			profileImagePath = await this.storageService.upload(file, "static/users");
		}

		return await this.prismaService.user
			.update({
				where: {
					id: dto.userId,
				},
				data: {
					firstName: dto.firstName,
					lastName: dto.lastName,
					bio: dto.bio,
					profileImagePath: profileImagePath,
				},
			})
			.then((user) => {
				return user;
			})
			.catch((error) => {
				console.log(error);
				throw new InternalServerErrorException(error);
			});
	}

	public async verifyMail(dto: VerifyMailDto) {
		// finish later
		await this.gmailService.send({
			to: dto.mail,
			html: `<a href="http://localhost:8000/">Verify</a>`,
		});
	}
}
