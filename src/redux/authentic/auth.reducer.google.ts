import { AnyAction } from 'redux'
import { ApiError } from '../../models/ApiError'
import { authActionTypes } from './auth.types.google'

export type AuthsState = {
  loading: boolean
  authData: {}
  error?: ApiError
}

export const initialAuthsState: AuthsState = {
  loading: false,
  authData: {},
  error: undefined,
}

const reducer = (
  state: AuthsState = initialAuthsState,
  action: AnyAction
): AuthsState => {
  switch (action.type) {
    case authActionTypes.GOOGLE_LOGIN_SUCCESS:
      //data from action.payload
      localStorage.setItem(
        'google-profile',
        JSON.stringify({ ...action?.payload })
      )
      console.log('data from reducer-google', action?.payload)
      return { ...state, authData: action?.payload }

    default:
      return state
  }
}

export default reducer
