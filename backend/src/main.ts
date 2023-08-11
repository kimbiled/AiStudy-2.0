import "dotenv/config";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { MainConfig } from "@config/main";

import { AppModule } from "./app.module";

import type { NestExpressApplication } from "@nestjs/platform-express";

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);
	app.setGlobalPrefix("/api/v2");
	app.enableCors({
		origin: true,
	});

	const config = new DocumentBuilder()
		.setTitle("AI Study")
		.setDescription("API documentation")
		.setVersion("2")
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup("/api/docs", app, document);

	await app.listen(MainConfig.BACKEND_PORT);
}

bootstrap().then(() => {
	console.log("Server listening on port:", MainConfig.BACKEND_PORT);
});
