import { Module } from "@nestjs/common";

import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

import { PrismaService } from "@root/prisma/prisma.service";
import { GmailService } from "@api/google/gmail/gmail.service";

@Module({
	controllers: [AuthController],
	providers: [AuthService, PrismaService, GmailService],
})
export class AuthModule {}
