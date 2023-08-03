export class CreateUserDto {
	username: string;
	password: string;
	email: string;
}
export class ValidateUserDto {
	username: string;
	password: string;
}

export class GetUserDto {
	username: string;
}

export class GetMeDto {
	sessionId: string;
}

export class UpdateUserDto {
	userId: string;
	firstName?: string;
	lastName?: string;
	bio?: string;
}

export class VerifyMailDto {
	mail: string;
}
