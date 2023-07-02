import { Injectable } from "@nestjs/common";
import { createTransport } from "nodemailer";

import { sendDto } from "./dto";

import config from "@root/config/google";

@Injectable()
export class GmailService {
	private transport = createTransport({
		service: "gmail",
		auth: {
			type: "OAUTH2",
			user: config.ROOT_MAIL,
			clientId: config.CLIENT_ID,
			clientSecret: config.CLIENT_SECRET,
			refreshToken: config.REFRESH_TOKEN,
		},
	});

	public async send({ to, subject, html }: sendDto) {
		await this.transport
			.sendMail({
				from: config.ROOT_MAIL,
				to: to,
				subject: subject,
				html: html,
			})
			.then((response) => {
				console.log(response);
			})
			.catch((reason) => {
				console.log(reason);
			});
	}
}
