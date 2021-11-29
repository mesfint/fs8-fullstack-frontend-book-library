import { AnyAction } from 'redux'
import { ApiError } from '../../models/ApiError'
import { Author } from '../../models/Author'
import { authorsActionTypes } from './authors.type'

export type AuthorsState = {
  loading: boolean
  authors: Author[]
  error?: ApiError
}
export const initialBooksState: AuthorsState = {
  loading: false,
  authors: [],
  error: undefined,
}

const reducer = (
  state: AuthorsState = initialBooksState,
  action: AnyAction
): AuthorsState => {
  switch (action.type) {
    case authorsActionTypes.FETCH_LIST_PENDING:
      return {
        ...state,
        loading: true,
      }
    case authorsActionTypes.FETCH_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: undefined,
        authors: action.payload,
      }
    case authorsActionTypes.FETCH_LIST_ERROR:
      return {
        ...state,
        authors: [],
        loading: false,
        error: action.payload,
      }
    case authorsActionTypes.ADD_AUTHOR_PENDING:
      return {
        ...state,
        loading: true,
      }
    case authorsActionTypes.ADD_AUTHOR_SUCCESS:
      return {
        ...state,
        loading: false,
        error: undefined,
        authors: [...state.authors, action.payload],
      }
    case authorsActionTypes.ADD_AUTHOR_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case authorsActionTypes.DELETE_AUTHOR_SUCCESS:
      return {
        ...state,
        authors: state.authors.filter(
          (author) => author.authorId !== action.payload
        ),
        loading: false,
        error: undefined,
      }
    default:
      return state
  }
}

export default reducer
