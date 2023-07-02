import { Response } from "express";
import { passwordResetDto, signInDto, signUpDto } from "./dto";
import { PrismaService } from "@root/prisma/prisma.service";
import { GmailService } from "@api/google/gmail/gmail.service";
export declare class AuthService {
    private prisma;
    private gmail;
    private strHelper;
    private tokenHelper;
    private pattern;
    constructor(prisma: PrismaService, gmail: GmailService);
    signUp({ username, email, password }: signUpDto, res: Response): Promise<Response<any, Record<string, any>>>;
    signIn({ username, password }: signInDto, res: Response): Promise<Response<any, Record<string, any>>>;
    passwordReset({ email }: passwordResetDto, res: Response): Promise<Response<any, Record<string, any>>>;
}
