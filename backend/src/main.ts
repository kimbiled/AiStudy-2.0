import "dotenv/config";
import { NestFactory } from "@nestjs/core";

import { MainConfig } from "@config/main";

import { AppModule } from "./app.module";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.setGlobalPrefix("/api/v2");
	app.enableCors({
		origin: true,
	});
	await app.listen(MainConfig.BACKEND_PORT);
}
bootstrap().then(() => {
	console.log("Server listening on port:", MainConfig.BACKEND_PORT);
});
