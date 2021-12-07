import { authActionTypes } from './auth.types'

export const googleLoginSuccess = (authData: any) => {
  return {
    type: authActionTypes.GOOGLE_LOGIN_SUCCESS,
    payload: authData,
  }
}

export const googleLogOutSuccess = (authData: null) => {
  return {
    type: authActionTypes.GOOGLE_LOGOUT_SUCCESS,
  }
}
