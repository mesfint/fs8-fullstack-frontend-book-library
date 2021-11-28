import axios from 'axios'

import { BookActions, FETCH_BOOKS, REMOVE_BOOK } from './../../types/bookTypes'
import { ADD_BOOK, BookType } from '../../types/bookTypes'
import { Dispatch } from 'redux'

const url = 'http://localhost:3000/api/v1/books'

export function addBook(book: BookType): BookActions {
  return {
    type: ADD_BOOK,
    payload: {
      book,
    },
  }
}
export function fetchBooks(book: BookType[]): BookActions {
  return {
    type: FETCH_BOOKS,
    payload: {
      book,
    },
  }
}
//delete book
export function removeBook(bookId: string): BookActions {
  return {
    type: REMOVE_BOOK,
    payload: {
      bookId,
    },
  }
}
//update book
// export function updateBook(book: BookType): BookActions {
//   return {
//     type: UPDATE_BOOK,
//     payload: {
//       book,
//     },
//   }
// }
//fetch books
export function fetchBooksAsync(): any {
  return async (dispatch: Dispatch) => {
    try {
      const res = await axios.get(url)
      dispatch(fetchBooks(res.data))
    } catch (error) {
      console.log(error)
    }
  }
}
//create book
export function addBookAsync(book: BookType): any {
  return async (dispatch: Dispatch) => {
    try {
      const res = await axios.post(url, book)
      dispatch(addBook(res.data))
    } catch (error) {
      console.log(error)
    }
  }
}
//delete book
export function deleteBookAsync(bookId: string): any {
  return async (dispatch: Dispatch) => {
    try {
      const res = await axios.delete(`${url}/${bookId}`)
      dispatch(removeBook(res.data.bookId))
    } catch (error) {
      console.log(error)
    }
  }
}
