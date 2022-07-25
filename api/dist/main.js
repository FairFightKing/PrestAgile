"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const typeorm_1 = require("typeorm");
const dotenv_1 = require("dotenv");
async function bootstrap() {
    (0, dotenv_1.config)();
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
    });
    const port = +process.env.APP_PORT || 3000;
    app.enableCors({
        origin: 'http://localhost:' + port,
    });
    app.setGlobalPrefix('api');
    console.log('Port running on: ', port);
    const options = new swagger_1.DocumentBuilder().addBearerAuth().build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('/', app, document);
    await app.listen(port);
}
bootstrap().then(() => {
    console.log('success', (0, typeorm_1.getConnection)());
});
//# sourceMappingURL=main.js.map