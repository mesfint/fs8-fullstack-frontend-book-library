import { Dispatch } from 'redux'
import { Book } from '../../models/Book'
import httpRequest from '../../utils/httpRequest'
import { booksActionTypes } from './books.types'

export const fetchBooksRequest = () => {
  return {
    type: booksActionTypes.FETCH_BOOK_LIST_PENDING,
  }
}

export const fetchBooksSuccess = (books: Book[]) => {
  return {
    type: booksActionTypes.FETCH_BOOK_LIST_SUCCESS,
    payload: books,
  }
}

export const fetchBooksFailure = (error: string) => {
  return {
    type: booksActionTypes.FETCH_BOOK_LIST_ERROR,
    payload: error,
  }
}
export const addBookRequest = () => {
  return {
    type: booksActionTypes.ADD_BOOK_PENDING,
  }
}

export const addBookSuccess = (newBook: Book[]) => {
  return {
    type: booksActionTypes.ADD_BOOK_SUCCESS,
    payload: newBook,
  }
}

export const addBookFailure = (error: string) => {
  return {
    type: booksActionTypes.ADD_BOOK_ERROR,
    payload: error,
  }
}

export const deleteBookSuccess = (bookId: string) => {
  return {
    type: booksActionTypes.DELETE_BOOK_SUCCESS,
    payload: bookId,
  }
}
export const searchBookRequest = (searchTerm?: string) => {
  return {
    type: booksActionTypes.SEARCH_BOOKS,
    payload: {
      searchTerm,
    },
  }
}

export function fetchBooks() {
  return (dispatch: Dispatch) => {
    dispatch(fetchBooksRequest())
    return httpRequest(`/books`)
      .then((books) => {
        console.log('FETCH BOOKS', books);
        dispatch(fetchBooksSuccess(books))
      })
      .catch((err) => dispatch(fetchBooksFailure(err)))
  }
}

export const postBook = (book: Book, history: any) => {
  return (dispatch: Dispatch) => {
    dispatch(addBookRequest())
    return httpRequest(`/books`, {
      method: 'post',
      body: JSON.stringify(book),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((book) => {
        dispatch(addBookSuccess(book))
        history('/books')
      })
      .catch((err) => dispatch(addBookFailure(err)))
  }
}

export const editBook = (book: Book, history: any) => {
  return (dispatch: Dispatch) => {
    dispatch(addBookRequest())
    return httpRequest(`/books/${book._id}`, {
      method: 'put',
      body: JSON.stringify(book),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((book) => {
        dispatch(addBookSuccess(book))
        history('/books')
      })
      .catch((err) => dispatch(addBookFailure(err)))
  }
}

export const deleteBook = (bookId: string) => {
  return async (dispatch: Dispatch) => {
    try {
      await httpRequest(`/books/${bookId}`, {
        method: 'delete',
      })
      dispatch(deleteBookSuccess(bookId))
    } catch (err) {
      return console.log({ err })
    }
  }
}
//to complete the edit a book need to get a book by id
export const findOneBook = async (bookId: string) => {
  try {
    const book = await httpRequest(`/books/${bookId}`, {
      method: 'GET',
    })
    return book
  } catch (err) {
    return null
  }
}
