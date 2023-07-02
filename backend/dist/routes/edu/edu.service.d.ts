import { PrismaService } from "@root/prisma/prisma.service";
import { createDto, getAllDto } from "./dto";
import { Response } from "express";
export declare class EduService {
    private prisma;
    constructor(prisma: PrismaService);
    create({ title, description, date, type, url }: createDto, res: Response): Promise<Response<any, Record<string, any>>>;
    getAll({ skip, limit }: getAllDto, res: Response): Promise<Response<any, Record<string, any>>>;
}
