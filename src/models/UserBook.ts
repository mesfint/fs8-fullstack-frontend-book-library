import { Book } from './Book'
import { User } from './User'

export type UserBook = {
  _id?: string
  book?: Book
  user?: User
  userId: string
  bookId: string
  borrow: boolean
  borrowDate: string
  returnDate?: string
}
