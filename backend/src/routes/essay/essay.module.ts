import { Module } from "@nestjs/common";
import { EssayController } from "@routes/essay/essay.controller";
import { EssayService } from "@routes/essay/essay.service";
import { OpenAiService } from "@api/openai/openAi.service";

@Module({
	controllers: [EssayController],
	providers: [EssayService, OpenAiService],
})
export class EssayModule {}
