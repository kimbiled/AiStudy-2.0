import { Module } from "@nestjs/common";

import { WritingController } from "@modules/writing/writing.controller";
import { WritingService } from "@modules/writing/writing.service";

import { PrismaModule } from "@modules/prisma/prisma.module";
import { StorageModule } from "@api/google/storage/storage.module";

import { HelperModule } from "@helper/helper.module";

@Module({
	imports: [PrismaModule, StorageModule, HelperModule],
	controllers: [WritingController],
	providers: [WritingService],
})
export class WritingModule {}
