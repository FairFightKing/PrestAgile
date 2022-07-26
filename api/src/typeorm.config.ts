import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { join } from 'path'
import { config } from 'dotenv'

config()
const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    url: process.env.DATABASE_URI,
    entities: [join(__dirname, '**', 'Entity/*.{ts,js}')],
    autoLoadEntities: true,
    synchronize: true,
    migrationsRun: false,
    migrations: ['src/migration/*{.ts,.js}'],
    cli: {
        entitiesDir: 'src/**/Entity/*.{ts,js}',
        migrationsDir: 'src/migration',
    },
}
console.log(typeOrmConfig)

export default typeOrmConfig