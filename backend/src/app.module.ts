import { Module } from "@nestjs/common";

import { GmailModule } from "@api/google/gmail/gmail.module";
import { OpenAiModule } from "@api/openai/openAi.module";

import { AuthModule } from "@routes/auth/auth.module";
import { UserModule } from "@routes/user/user.module";
import { EduModule } from "@routes/edu/edu.module";
import { EssayModule } from "@routes/essay/essay.module";

@Module({
	imports: [AuthModule, UserModule, EduModule, EssayModule, GmailModule, OpenAiModule],
})
export class AppModule {}
