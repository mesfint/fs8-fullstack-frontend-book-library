import { Author } from "./Author";

export type Book = {
  pageNumber: number
  _id: string
  bookId: string
  isbn: number
  title: string
  publishedYear: number
  coverImage: string
  quantity: number
  rating: number
  category: string
  summary: string
  author?: Author
}
