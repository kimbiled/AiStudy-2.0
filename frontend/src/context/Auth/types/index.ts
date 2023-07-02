export type TUser = {};

export interface ISignUp {
	username: string;
	email: string;
	password: string;
}
export interface ISignIn {
	username: string;
	password: string;
}

export interface IGetMe {
	accessToken: string;
	refreshToken: string;
}

export interface ISignUpResponse {
	message: string;
	data: {
		accessToken: string;
		refreshToken: string;
	};
}
export interface ISignInResponse {
	accessToken: string;
	refreshToken: string;
}
export interface IGetMeResponse {
	user: TUser;
	accessToken: string;
	refreshToken: string;
}
