export class CreateSessionDto {
	readonly userId: string;
	ip: string;
	device: string;
}

export class GetSessionDto {
	readonly sessionId: string;
}

export class RevokeSessionDto {
	readonly sessionId: string;
}

export class ValidateSessionDto {
	readonly sessionId: string;
	readonly device: string;
}
