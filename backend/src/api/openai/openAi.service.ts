import { Injectable } from "@nestjs/common";
import { Configuration, OpenAIApi } from "openai";

import config from "@config/openai";

@Injectable()
export class OpenAiService {
	private conf = new Configuration({
		organization: config.ORG,
		username: config.USERNAME,
		password: config.PASSWORD,
		apiKey: config.API_KEY,
	});

	private openai = new OpenAIApi(this.conf);
	private model = "gpt-3.5-turbo";

	async createChat(userRequest: string, systemRule: string) {
		return this.openai
			.createChatCompletion({
				model: this.model,
				messages: [
					{
						role: "system",
						content: systemRule,
					},
					{ role: "user", content: userRequest },
				],
			})
			.then((response) => {
				console.log(response.data.choices);
				return response.data.choices[0].message.content;
			})
			.catch((error) => {
				console.log(error);
				return "Server side error, please try again one more time";
			});
	}
}
