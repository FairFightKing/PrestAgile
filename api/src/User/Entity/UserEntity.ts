import UserDTO from '../DTO/UserDTO'
import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm'
import * as bcrypt from 'bcrypt'
import UserInfoEntity from './UserInfoEntity'

@Entity()
@Unique(['email'])
export default class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar' })
  email: UserDTO['email']

  @Column({ type: 'varchar' })
  password: UserDTO['password']

  @Column({ type: 'varchar' })
  name: UserDTO['name']

  @Column()
  salt: string

  //@Column({ type: 'array' })
  //type: UserDTO['type']

  @OneToOne(() => UserInfoEntity, { eager: true })
  @JoinColumn()
  userInfo: UserInfoEntity

  async validatePassword(password: UserDTO['password']): Promise<boolean> {
    return bcrypt.compare(password, this.password)
  }
}
