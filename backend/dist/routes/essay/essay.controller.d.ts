import { Response } from "express";
import { EssayService } from "./essay.service";
export declare class EssayController {
    private essayService;
    constructor(essayService: EssayService);
    check(body: any, res: Response): Promise<Response<any, Record<string, any>>>;
    createSAT(res: Response): Promise<Response<any, Record<string, any>>>;
}
