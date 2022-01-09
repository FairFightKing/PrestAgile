export default interface UserDTO {
  email: string
  name: string
  type: Types[]
}

export enum Types {
  USER = 0,
  ADMIN = 1,
  FREELANCE = 2,
  PRO = 3,
}
