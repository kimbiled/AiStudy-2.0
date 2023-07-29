import { Injectable } from "@nestjs/common";

import { UserService } from "@modules/user/user.service";
import { SessionService } from "@modules/session/session.service";

import { CreateUserDto, ValidateUserDto } from "@modules/user/dto";

@Injectable()
export class AuthService {
	constructor(private readonly userService: UserService, private readonly sessionService: SessionService) {}

	public async localSignUp(dto: CreateUserDto) {}
	public async localSignIn(dto: ValidateUserDto) {}
}
