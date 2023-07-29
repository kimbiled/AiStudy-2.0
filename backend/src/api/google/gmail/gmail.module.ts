import { Module } from "@nestjs/common";

import { GmailService } from "@root/api/google/gmail/gmail.service";

@Module({
	providers: [GmailService],
	exports: [GmailService],
})
export class GmailModule {}
