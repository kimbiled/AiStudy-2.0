import { Module } from "@nestjs/common";

import { StringService } from "@helper/string/string.service";

@Module({
	providers: [StringService],
	exports: [StringService],
})
export class StringModule {}
