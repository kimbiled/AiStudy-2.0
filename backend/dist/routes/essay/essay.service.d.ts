import { Response } from "express";
import { OpenAiService } from "@api/openai/openAi.service";
import { checkDto } from "@routes/essay/dto";
export declare class EssayService {
    private openai;
    constructor(openai: OpenAiService);
    check({ text, prompt }: checkDto, res: Response): Promise<Response<any, Record<string, any>>>;
    createSAT(res: Response): Promise<Response<any, Record<string, any>>>;
}
