import { Response } from "express";
import { passwordResetDto, signInDto, signUpDto } from "./dto";
import { AuthService } from "./auth.service";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(body: signUpDto, res: Response): Promise<Response<any, Record<string, any>>>;
    signIn(body: signInDto, res: Response): Promise<Response<any, Record<string, any>>>;
    passwordReset(body: passwordResetDto, res: Response): Promise<Response<any, Record<string, any>>>;
}
