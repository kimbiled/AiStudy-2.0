import { Module } from "@nestjs/common";

import { AuthModule } from "@modules/auth/auth.module";
import { WritingModule } from "@modules/writing/writing.module";
import { ReadingModule } from "@modules/reading/reading.module";

@Module({
	imports: [AuthModule, WritingModule, ReadingModule],
})
export class AppModule {}
