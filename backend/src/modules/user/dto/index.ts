import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
	@ApiProperty()
	username: string;

	@ApiProperty()
	password: string;

	@ApiProperty()
	email: string;
}
export class ValidateUserDto {
	@ApiProperty()
	username: string;

	@ApiProperty()
	password: string;
}

export class GetUserDto {
	@ApiProperty()
	username: string;
}

export class GetMeDto {
	@ApiProperty()
	sessionId: string;
}

export class UpdateUserDto {
	@ApiProperty()
	userId: string;

	@ApiProperty({ required: false })
	firstName?: string;

	@ApiProperty({ required: false })
	lastName?: string;

	@ApiProperty({ required: false })
	bio?: string;
}

export class VerifyMailDto {
	mail: string;
}
