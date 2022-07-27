import UserDTO from '../DTO/UserDTO'
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm'
import * as bcrypt from 'bcrypt'

@Entity()
@Unique(['email', 'uuid'])
export default class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar' })
  uuid: UserDTO['uuid']

  @Column({ type: 'varchar' })
  email: UserDTO['email']

  @Column({ type: 'varchar' })
  password: string

  @Column()
  salt: string

  // @Column({ type: 'varchar' })
  // type: UserDTO['type']

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password)
  }
}
