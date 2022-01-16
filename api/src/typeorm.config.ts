import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { join } from 'path'

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'database-pg.db',
  entities: [join(__dirname, '**', 'Entity/*.{ts,js}')],
  autoLoadEntities: true,
  synchronize: true,
  migrationsRun: false,
  migrations: ['src/migration/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migration',
  },
}

export default typeOrmConfig
