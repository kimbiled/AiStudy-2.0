import { Module } from "@nestjs/common";
import { OpenAiService } from "@api/openai/openAi.service";

@Module({
	providers: [OpenAiService],
	exports: [OpenAiService],
})
export class OpenAiModule {}
