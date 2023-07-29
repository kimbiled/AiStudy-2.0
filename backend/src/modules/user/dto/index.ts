export interface CreateUserDto {
	username: string;
	password: string;
	email: string;
}
export interface ValidateUserDto {
	username: string;
	password: string;
}
