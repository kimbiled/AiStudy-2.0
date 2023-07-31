export interface ILocalSignUp {
	readonly username: string;
	readonly email: string;
	readonly password: string;
}
export interface ILocalSignIn {
	readonly username: string;
	readonly password: string;
}

export interface ILogOut {
	readonly sessionId: string;
}
