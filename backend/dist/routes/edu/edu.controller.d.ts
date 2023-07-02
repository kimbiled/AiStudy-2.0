import { EduService } from "@routes/edu/edu.service";
import { createDto, getAllDto } from "@routes/edu/dto";
import { Response } from "express";
export declare class EduController {
    private eduService;
    constructor(eduService: EduService);
    create(body: createDto, res: Response): Promise<Response<any, Record<string, any>>>;
    getAll(body: getAllDto, res: Response): Promise<Response<any, Record<string, any>>>;
}
