import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { join } from 'path'
import { config } from 'dotenv'

config()
const typeOrmConfig: TypeOrmModuleOptions = {
  type: process.env.DB_TYPE as any,
  database: process.env.Database,
  host: process.env.Host,
  port: parseInt(process.env.Port),
  username: process.env.User,
  password: process.env.Password,
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
