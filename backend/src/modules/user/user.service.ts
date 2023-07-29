import {
	ConflictException,
	Injectable,
	InternalServerErrorException,
	NotFoundException,
	UnauthorizedException,
} from "@nestjs/common";

import { PrismaService } from "@modules/prisma/prisma.service";

import { StringService } from "@helper/string/string.service";

import { CreateUserDto, ValidateUserDto } from "@modules/user/dto";

@Injectable()
export class UserService {
	constructor(private readonly prismaService: PrismaService, private readonly stringHelper: StringService) {}

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
}
