export type User = {
  userId: string
  firstName: string
  lastName: string
  userName: string
  _id: string
  email: string
  password: string
  password2: string
  isAdmin: boolean
}

export type UserStorage = {
  user: User;
  token: string;
}