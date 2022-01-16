import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { join } from 'path'

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'database-pg.db',
  entities: [join(__dirname, '**', 'Entity/*.{ts,js}')],
  autoLoadEntities: true,
  synchronize: false,
  migrationsRun: false,
}

export default typeOrmConfig
