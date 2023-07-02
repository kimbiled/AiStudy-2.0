import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";

import { UserController } from "./user.controller";
import { UserService } from "./user.service";

import { PrismaService } from "@root/prisma/prisma.service";
import { UserMiddleware } from "@routes/user/user.middleware";

@Module({
	controllers: [UserController],
	providers: [UserService, PrismaService],
})
export class UserModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(UserMiddleware).forRoutes("/user/get-me");
	}
}
