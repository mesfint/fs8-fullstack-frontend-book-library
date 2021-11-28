//import { BookType } from './../../types/bookTypes'
import {
  ADD_BOOK,
  BookState,
  BookActions,
  // REMOVE_BOOK,
  FETCH_BOOKS,
  REMOVE_BOOK,
} from '../../types/bookTypes'

export default function bookReducer(
  state: BookState = {
    allBooks: [],
  },
  action: BookActions
): BookState {
  // always return a new object for the root state
  switch (action.type) {
    case ADD_BOOK: {
      const { book } = action.payload
      //if (state.allBooks.find((b) => b.bookId === book.bookId)) return state

      return { ...state, allBooks: [...state.allBooks, book] }
    }
    //remove book
    case REMOVE_BOOK: {
      const { bookId } = action.payload
      return {
        ...state,
        allBooks: state.allBooks.filter((b) => b.bookId !== bookId),
      }
    }
    //fetch all books
    case FETCH_BOOKS: {
      const { book } = action.payload
      return { ...state, allBooks: book }
    }
    default:
      return state
  }
}
