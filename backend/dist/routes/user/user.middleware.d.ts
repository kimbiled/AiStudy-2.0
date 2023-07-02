import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { PrismaService } from "@root/prisma/prisma.service";
export declare class UserMiddleware implements NestMiddleware {
    private prisma;
    private tokenHelper;
    constructor(prisma: PrismaService);
    use(req: Request, res: Response, next: NextFunction): void;
}
