import { EntityRepository, Repository } from 'typeorm'
import UserInfoEntity from '../Entity/UserInfoEntity'

@EntityRepository(UserInfoEntity)
export default class UserInfoRepository extends Repository<UserInfoEntity> {}
