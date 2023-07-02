import "dotenv/config";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import * as cors from "cors";

import config from "@root/config";

async function server() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);
	app.use(cors());
	app.setGlobalPrefix("/api");
	app.enableCors({
		origin: "*",
		allowedHeaders: "*",
		methods: "POST,GET",
	});
	

	await app.listen(config.PORT);
}

async function bootstrap() {
	await server().then(() => {
		console.log("Server initialized");
	});
}
bootstrap().then(() => {
	console.log("Application started");
});
