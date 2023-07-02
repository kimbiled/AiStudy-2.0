import { Response } from "express";
import { getMeDto, getUserDto, updateSettingsDto } from "@routes/user/dto";
import { PrismaService } from "@root/prisma/prisma.service";
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    getMe({ accessToken, refreshToken }: getMeDto, res: Response): Promise<Response<any, Record<string, any>>>;
    getUser({ id }: getUserDto, res: Response): Promise<Response<any, Record<string, any>>>;
    updateSettings({ id, firstName, lastName, bio }: updateSettingsDto, res: Response): Promise<Response<any, Record<string, any>>>;
}
