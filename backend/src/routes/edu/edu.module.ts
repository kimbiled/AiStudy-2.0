import { Module } from "@nestjs/common";

import { EduService } from "./edu.service";
import { EduController } from "./edu.controller";

import { PrismaService } from "@root/prisma/prisma.service";

@Module({
	controllers: [EduController],
	providers: [EduService, PrismaService],
})
export class EduModule {}
