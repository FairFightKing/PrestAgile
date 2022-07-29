"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const typeOrmConfig = {
    type: 'postgres',
    url: process.env.DATABASE_URI,
    entities: [(0, path_1.join)(__dirname, '**', 'Entity/*.{ts,js}')],
    autoLoadEntities: true,
    synchronize: true,
    migrationsRun: false,
    migrations: ['src/migration/*{.ts,.js}'],
    cli: {
        entitiesDir: 'src/**/Entity/*.{ts,js}',
        migrationsDir: 'src/migration',
    },
};
console.log(typeOrmConfig);
exports.default = typeOrmConfig;
//# sourceMappingURL=typeorm.config.js.map