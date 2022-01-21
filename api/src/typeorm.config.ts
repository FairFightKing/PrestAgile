import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { join } from 'path'
import { config } from 'dotenv'

config()
const typeOrmConfig: TypeOrmModuleOptions = {
  type: process.env.DB_TYPE as any,
  name: process.env.DB_NAME,
  database: process.env.DATABASE_URI,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
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

export default typeOrmConfig
