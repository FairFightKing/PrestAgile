<<<<<<< HEAD
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST || 'postgres-db',
    port: +process.env.POSTGRES_PORT || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.POSTGRES_DB || 'prestadb',
    entities: [__dirname + '/**/*.entity.ts', __dirname + '/**/*.entity.js'],
    migrationsRun: false,
    logging: true,
    migrationsTableName: "migration",
    migrations: [__dirname + '/migration/**/*.ts', __dirname + '/migration/**/*.js'],
    synchronize: false,
    cli: {
        migrationsDir: 'src/migration'
    }
}

export = typeOrmConfig
=======
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
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
}
console.log(typeOrmConfig)

export default typeOrmConfig
>>>>>>> preprod
