"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const cookieParser = require("cookie-parser");
const common_1 = require("@nestjs/common");
const logger_factory_1 = require("./logger/logger-factory");
async function start() {
    const PORT = 3300;
    console.log(PORT);
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: (0, logger_factory_1.LoggerFactory)('ehson'),
    });
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Ehson App')
        .setDescription("Haftasiga atigi 1000 so'm va ulkan sahovat karvoniga qo'shiling")
        .setVersion('1.0')
        .addTag('ehsonBoy')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    app.use(cookieParser());
    await app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
start();
//# sourceMappingURL=main.js.map