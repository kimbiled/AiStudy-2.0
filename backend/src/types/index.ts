import { ApiProperty } from "@nestjs/swagger";

export class FilterDto {
	@ApiProperty({
		type: Number,
		required: false,
	})
	skip?: number;

	@ApiProperty({
		type: Number,
		required: false,
	})
	take?: number;
}
