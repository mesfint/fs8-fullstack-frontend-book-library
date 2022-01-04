import { AnyAction } from 'redux'
import { ApiError } from '../../models/ApiError'
import { authsActionTypes } from './auth.types'

export type UserAuthsState = {
  token: string | null
  isAuthenticated: boolean | null
  loading: boolean
  error?: ApiError
  userData: {}
}

export const initialUserAuthsState: UserAuthsState = {
  token: localStorage.getItem('user-token'),
  isAuthenticated: null,
  loading: true,
  error: undefined,
  userData: {},
}

const reducer = (state = initialUserAuthsState, action: AnyAction) => {
  const { type, payload } = action
  switch (type) {
    case authsActionTypes.USER_SIGN_UP_PENDING:
      return { ...state, loading: true }
    case authsActionTypes.USER_SIGN_UP_SUCCESS:
      //data from action.payload
      localStorage.setItem('user-token', JSON.stringify(payload.token))
      console.log('data from user-token', payload.token)
      return {
        ...state,
        userData: payload,
        isAuthenticated: true,
        loading: false,
      }
    case authsActionTypes.USER_SIGN_UP_FAILURE:
      localStorage.removeItem('user-token')
      return {
        ...state,
        token: null,
        isAuthenticated: false,

        loading: false,
      }
    case authsActionTypes.USER_SIGN_IN:
      localStorage.setItem(
        'userProfile',
        JSON.stringify(action?.payload)
      )
      console.log('data from reducer-google', action?.payload)
      return { ...state, userData: action?.payload }

    default:
      return state
  }
}

export default reducer
