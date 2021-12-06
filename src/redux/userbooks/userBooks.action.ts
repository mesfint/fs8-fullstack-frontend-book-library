import { Dispatch } from 'redux'
import { UserBook } from '../../models/UserBook'
import httpRequest from '../../utils/httpRequest'
import { userBooksActionTypes } from './userBooks.types'

//fetches all user books
export const fetchUserBooksRequest = () => {
  return {
    type: userBooksActionTypes.FETCH_USER_BOOK_PENDING,
  }
}

//fetch user books success
export const fetchUserBooksSuccess = (userBooks: UserBook[]) => {
  return {
    type: userBooksActionTypes.FETCH_USER_BOOK_SUCCESS,
    payload: userBooks,
  }
}

//fetch user books failure
export const fetchUserBooksFailure = (error: string) => {
  return {
    type: userBooksActionTypes.FETCH_USER_BOOK_ERROR,
    payload: error,
  }
}

//borrow book pending
export const borrowBookRequest = () => {
  return {
    type: userBooksActionTypes.BORROW_BOOK_PENDING,
  }
}

//borrow book success
export const borrowBookSuccess = (userBook: UserBook) => {
  return {
    type: userBooksActionTypes.BORROW_BOOK_SUCCESS,
    payload: userBook,
  }
}

//borrow book failure
export const borrowBookFailure = (error: string) => {
  return {
    type: userBooksActionTypes.BORROW_BOOK_ERROR,
    payload: error,
  }
}

//delete user book success
export const deleteUserBookSuccess = (userBookId: string) => {
  return {
    type: userBooksActionTypes.DELETE_USER_BOOK_SUCCESS,
    payload: userBookId,
  }
}

//fetches all user books
export const fetchUserBooks = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchUserBooksRequest())
    return httpRequest('/userbooks').then((userBooks) =>
      dispatch(fetchUserBooksSuccess(userBooks))
    )
  }
}
