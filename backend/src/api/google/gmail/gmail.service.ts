import { Injectable } from "@nestjs/common";

import { createTransport } from "nodemailer";
import { GoogleConfig } from "@config/google";
import { SendMailDto } from "@api/google/gmail/dto";

@Injectable()
export class GmailService {
	private readonly transport = createTransport({
		service: "gmail",
		auth: {
			user: GoogleConfig.ROOT_MAIL,
			clientId: GoogleConfig.CLIENT_ID,
			clientSecret: GoogleConfig.CLIENT_SECRET,
			refreshToken: GoogleConfig.REFRESH_TOKEN,
		},
	});

	public async send(dto: SendMailDto) {
		await this.transport
			.sendMail({
				from: GoogleConfig.ROOT_MAIL,
				...dto,
			})
			.then((response) => {
				console.log(response);
			});
	}
}
