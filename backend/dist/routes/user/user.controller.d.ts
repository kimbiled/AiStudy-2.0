import { Response } from "express";
import { UserService } from "@routes/user/user.service";
import { getMeDto, getUserDto, updateSettingsDto } from "@routes/user/dto";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getMe(body: getMeDto, res: Response): Promise<Response<any, Record<string, any>>>;
    getUser(body: getUserDto, res: Response): Promise<Response<any, Record<string, any>>>;
    updateSettings(body: updateSettingsDto, res: Response): Promise<Response<any, Record<string, any>>>;
}
