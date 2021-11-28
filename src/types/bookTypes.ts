export const FETCH_BOOKS = 'FETCH_BOOKS'
export const ADD_BOOK = 'ADD_BOOK'
export const UPDATE_BOOK = 'UPDATE_BOOK'
export const REMOVE_BOOK = 'REMOVE_BOOK'
export const SEARCH_BOOK = 'SEARCH_BOOK'

export type BookType = {
  bookId: string
  isbn: number
  title: string
  publishedYear: number
  coverImage: string
  pageNumber: number
  quantity: number
  rating: number
  summary: string
  categories: string
}

export type AddBookAction = {
  type: typeof ADD_BOOK
  payload: {
    book: BookType
  }
}
export type FetchBookAction = {
  type: typeof FETCH_BOOKS
  payload: {
    book: BookType[]
  }
}

//remove book action
export type RemoveBookAction = {
  type: typeof REMOVE_BOOK
  payload: {
    bookId: string
  }
}

//update book action
export type UpdateBookAction = {
  type: typeof UPDATE_BOOK
  payload: {
    book: BookType
  }
}
//All Book actions
export type BookActions = AddBookAction | FetchBookAction | RemoveBookAction

//Book state type

export type BookState = {
  allBooks: BookType[]
}
//App
export type AppState = {
  books: BookState
}
