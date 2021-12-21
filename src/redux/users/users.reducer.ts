import { AnyAction } from 'redux'
import { ApiError } from '../../models/ApiError'
import { User } from '../../models/User'
import { userActionTypes } from './users.types'

export type UsersState = {
  loading: boolean
  users: User[]
  error?: ApiError
}
export const initialUserState: UsersState = {
  loading: false,
  users: [],
  error: undefined,
}

export const reducer = (state = initialUserState, action: AnyAction) => {
  switch (action.type) {
    case userActionTypes.FETCH_LIST_PENDING:
      return { ...state, loading: true }
    case userActionTypes.FETCH_LIST_SUCCESS:
      return {
        ...state,
        users: action.payload,
        error: undefined,
        loading: false,
      }
    case userActionTypes.FETCH_LIST_ERROR:
      return { ...state, users: [], error: action.payload, loading: false }
    case userActionTypes.ADD_USER_PENDING:
      return { ...state, loading: true }
    case userActionTypes.SIGN_UP:
      return {
        ...state,
        users: [...state.users, action.payload],
        error: undefined,
        loading: false,
      }
    case userActionTypes.ADD_USER_ERROR:
      return { ...state, error: action.payload, loading: false }
    case userActionTypes.DELETE_USER_SUCCESS:
      console.log(
        'FILTER',
        state.users.filter((user) => user.userId !== action.payload)
      )
      return {
        ...state,
        users: state.users.filter((user) => user.userId !== action.payload),
        error: undefined,
        loading: false,
      }
    default:
      return state
  }
}

export default reducer
