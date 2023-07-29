import { Module } from "@nestjs/common";

import { WritingController } from "@modules/writing/writing.controller";
import { WritingService } from "@modules/writing/writing.service";

@Module({
	controllers: [WritingController],
	providers: [WritingService],
})
export class WritingModule {}
