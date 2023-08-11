import { ApiProperty } from "@nestjs/swagger";

export class CreateWritingDto {
	@ApiProperty()
	readonly taskType: number;

	@ApiProperty()
	readonly thesis: string;

	@ApiProperty({ required: false })
	path?: string;
}

export class CheckWritingDto {
	@ApiProperty()
	readonly content: string;
}
