import UserDTO from '../DTO/UserDTO'

export default class User {
  constructor(
    private _id: number,
    private _email: UserDTO['email'],
    private _name: UserDTO['name'],
    private _type: UserDTO['type'],
  ) {}

  get id(): number {
    return this._id
  }

  set id(value: number) {
    this._id = value
  }

  get email(): UserDTO['email'] {
    return this._email
  }

  set email(value: UserDTO['email']) {
    this._email = value
  }

  get name(): UserDTO['name'] {
    return this._name
  }

  set name(value: UserDTO['name']) {
    this._name = value
  }

  get type(): UserDTO['type'] {
    return this._type
  }

  set type(value: UserDTO['type']) {
    this._type = value
  }
}
