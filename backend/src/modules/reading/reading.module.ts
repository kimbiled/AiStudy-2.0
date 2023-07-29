import { Module } from "@nestjs/common";

import { ReadingController } from "@modules/reading/reading.controller";
import { ReadingService } from "@modules/reading/reading.service";

import { PrismaModule } from "@modules/prisma/prisma.module";

@Module({
	imports: [PrismaModule],
	controllers: [ReadingController],
	providers: [ReadingService],
})
export class ReadingModule {}
