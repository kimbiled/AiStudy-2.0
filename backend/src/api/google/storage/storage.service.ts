import { BadRequestException, Injectable } from "@nestjs/common";
import { Storage } from "@google-cloud/storage";

import { GoogleConfig } from "@config/google";

@Injectable()
export class StorageService {
	private readonly bucket = new Storage({
		keyFilename: GoogleConfig.KEY_FILE,
	}).bucket(GoogleConfig.BUCKET_NAME);

	public async upload(file: Express.Multer.File, path: string) {
		const fileName: string = `${new Date().toLocaleString("en-US", {
			year: "numeric",
			month: "numeric",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
			timeZone: "Asia/Almaty",
		})}`;

		const fileStream = this.bucket.file(`${path}/${fileName}`).createWriteStream({
			metadata: {
				contentType: file.mimetype,
			},
		});

		fileStream.on("error", (error) => {
			throw new BadRequestException(error);
		});

		fileStream.end(file.buffer);
		return `${path}/${fileName}`;
	}
}
