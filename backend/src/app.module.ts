import { Module } from "@nestjs/common";

import { AuthModule } from "@modules/auth/auth.module";
import { UserModule } from "@modules/user/user.module";
import { WritingModule } from "@modules/writing/writing.module";
import { SpeakingModule } from "@modules/speaking/speaking.module";
import { ReadingModule } from "@modules/reading/reading.module";

@Module({
	imports: [AuthModule, UserModule, WritingModule, SpeakingModule, ReadingModule],
})
export class AppModule {}
