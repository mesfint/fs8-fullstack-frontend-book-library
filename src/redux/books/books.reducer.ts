import { AnyAction } from 'redux'
import { ApiError } from '../../models/ApiError'
import { Book } from '../../models/Book'
import { booksActionTypes } from './books.types'

export type BooksState = {
  loading: boolean
  books: Book[]
  filteredBooks: Book[]
  searchTerm: string
  error?: ApiError
}
export const initialBooksState: BooksState = {
  loading: false,
  books: [],
  filteredBooks: [],
  searchTerm: '',
  error: undefined,
}

const reducer = (state = initialBooksState, action: AnyAction) => {
  switch (action.type) {
    case booksActionTypes.FETCH_LIST_PENDING:
      return { ...state, loading: true }
    case booksActionTypes.FETCH_LIST_SUCCESS:
      return {
        ...state,
        books: action.payload,
        error: undefined,
        loading: false,
      }
    case booksActionTypes.FETCH_LIST_ERROR:
      return { ...state, books: [], error: action.payload, loading: false }
    case booksActionTypes.ADD_BOOK_PENDING:
      return { ...state, loading: true }
    case booksActionTypes.ADD_BOOK_SUCCESS:
      return {
        ...state,
        books: [...state.books, action.payload],
        error: undefined,
        loading: false,
      }
    case booksActionTypes.ADD_BOOK_ERROR:
      return { ...state, error: action.payload, loading: false }
    case booksActionTypes.DELETE_BOOK_SUCCESS:
      console.log(
        'FILTER',
        state.books.filter((book) => book.bookId !== action.payload)
      )
      return {
        ...state,
        books: state.books.filter((book) => book.bookId !== action.payload),
        error: undefined,
        loading: false,
      }
    case booksActionTypes.SEARCH_BOOKS:
      const searchTerm = action.payload.searchTerm
      const filteredBooks = state.books.filter((b) => {
        //Search book by title or author firstName or Genre
        return (
          b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          b.author?.firstName
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          b.category.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })

      return {
        ...state,
        filteredBooks,
        searchTerm,
      }
    default:
      return state
  }
}

export default reducer
