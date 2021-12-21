export type User = {
  userId: string
  firstName: string
  lastName: string
  userName: string
  _id: string
  email: string
  imageUrl?: string
  password: string
  confirmPassword: string
  isAdmin: boolean
}

export type UserStorage = {
  user: User
  token: string
}
