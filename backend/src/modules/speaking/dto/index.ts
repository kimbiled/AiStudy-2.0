import { ApiProperty } from "@nestjs/swagger";

export class CreateSpeakingDto {
	@ApiProperty()
	readonly thesis: string;
}
