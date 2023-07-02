"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cors = require("cors");
const config_1 = require("./config");
async function server() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cors());
    app.setGlobalPrefix("/api");
    app.enableCors({
        origin: "*",
        allowedHeaders: "*",
        methods: "POST,GET",
    });
    await app.listen(config_1.default.PORT);
}
async function bootstrap() {
    await server().then(() => {
        console.log("Server initialized");
    });
}
bootstrap().then(() => {
    console.log("Application started");
});
//# sourceMappingURL=main.js.map