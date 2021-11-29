import { BooksState } from './redux/books/books.reducer'
import { AuthorsState } from './redux/authors/authors.reducer'
import { UsersState } from './redux/users/users.reducer'
// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

// A product
export type Product = {
  id: string
  name: string
  price: number
}

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
}

// Use this union in reducer
export type ProductActions = AddProductAction | RemoveProductAction

export type ProductState = {
  inCart: Product[]
}

export type AppState = {
  product: ProductState
  books: BooksState
  authors: AuthorsState
  users: UsersState
}
