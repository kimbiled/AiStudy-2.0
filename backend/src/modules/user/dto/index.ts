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
