import { AnyAction } from 'redux'
import { ApiError } from '../../models/ApiError'
import { UserBook } from '../../models/UserBook'
import { userBooksActionTypes } from './userBooks.types'

export interface UserBooksState {
  loading: boolean
  userBooks: UserBook[]
  error?: ApiError
}

//initial state
export const initialUserBooksState: UserBooksState = {
  loading: false,
  userBooks: [],
  error: undefined,
}

//reducer

const reducer = (
  state = initialUserBooksState,
  action: AnyAction
): UserBooksState => {
  switch (action.type) {
    case userBooksActionTypes.FETCH_USER_BOOK_PENDING:
      return {
        ...state,
        loading: true,
      }
    case userBooksActionTypes.FETCH_USER_BOOK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: undefined,
        userBooks: action.payload,
      }
    case userBooksActionTypes.FETCH_USER_BOOK_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default reducer
