export class getMeDto {
	accessToken?: string;
	refreshToken?: string;
}

export class getUserDto {
	id: string;
}

export class updateSettingsDto {
	id: string;
	firstName?: string;
	lastName?: string;
	bio?: string;
}
