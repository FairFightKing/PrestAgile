import { Types } from '../Types/types'

export default interface UserDTO {
  email: string
  name?: string
  type: Types[]
  password: string
}
