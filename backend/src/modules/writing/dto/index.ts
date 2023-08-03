export class CreateWritingDto {
	readonly taskType: number;
	readonly thesis: string;
	path?: string;
}

export class CheckWritingDto {
	readonly content: string;
}
