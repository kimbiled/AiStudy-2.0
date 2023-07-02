import { HttpStatus, Injectable } from "@nestjs/common";
import { Response } from "express";

import { OpenAiService } from "@api/openai/openAi.service";
import { checkDto } from "@routes/essay/dto";

@Injectable()
export class EssayService {
	constructor(private openai: OpenAiService) {}
	async check({ text, prompt }: checkDto, res: Response) {
		const rule =
			`Answer length must be less than 150. You are a tutor, your task is check user's essay on topic ${prompt}. First, give determined IELTS band score. Second, give 3 words listing advantages and disadvatnages each. Third, give overall feedback. DO NOT FORGET LENGTH SHOULD NOT BE MORE THAN 150 WORDS. add  symbol '--' between them, so can easily convert it into an array 
			\n\ Example: Score: 7.5 --  Coherence, Lexical, Grammar -- Lack of words, lack of grammar, No idioms -- Feedback: some feedback`;
		const rez = await this.openai.createChat(text, rule);
		return res.status(HttpStatus.OK).json({ message: "good", data: rez });
	}

	async createSAT(res: Response) {
		const rule =
			"You are SAT tutor, your mission is to create a SAT reading text sample and create reading passage questions according to that text, output must be TEXT: (created text)\\nQUESTIONS: (1. question\\n2. question ...up to 6 questions)";
		const rez = await this.openai.createChat("create SAT reading test", rule);
		return res.status(HttpStatus.OK).json({ data: rez });
	}
}
