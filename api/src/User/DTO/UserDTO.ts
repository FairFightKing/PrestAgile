import { Types } from '../Types/types'

export default interface UserDTO {
  email: string
  uuid: string
  type?: Types[]
}
