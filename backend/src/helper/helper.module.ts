import { Module } from "@nestjs/common";

import { StringHelper } from "@helper/string/string.helper";
import { ObjectHelper } from "@helper/object/object.helper";

@Module({
	providers: [StringHelper, ObjectHelper],
	exports: [StringHelper, ObjectHelper],
})
export class HelperModule {}
