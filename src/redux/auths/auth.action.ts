import { authsActionTypes } from './auth.types'
import { Dispatch } from 'redux'
import httpRequest from '../../utils/httpRequest'
import { User } from '../../models/User'
import axios from 'axios'

export const userSignUpRequest = () => {
  return {
    type: authsActionTypes.USER_SIGN_UP_PENDING,
  }
}

export const userSignUpSuccess = (userData: any) => {
  return {
    type: authsActionTypes.USER_SIGN_UP_SUCCESS,
    payload: userData,
  }
}

export const userSignUpFailure = () => {
  return {
    type: authsActionTypes.USER_SIGN_UP_FAILURE,
  }
}

export const userSignIn = (authData: any) => {
  return {
    type: authsActionTypes.USER_SIGN_IN,
    payload: authData,
  }
}

export const userSignInError = (error: any) => {
  return {
    type: authsActionTypes.USER_SIGN_IN_ERROR,
    payload: error,
  }
}

export const userSignOut = (authData: null) => {
  return {
    type: authsActionTypes.USER_SIGN_OUT,
  }
}

//signup User
export const signUpUser = (user: User, history: any) => {
  return (dispatch: Dispatch) => {
    dispatch(userSignUpRequest())
    return httpRequest('/users/signup', {
      method: 'post',
      body: JSON.stringify(user),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((user) => {
        dispatch(userSignIn(user))
        history('/users')
      })
      .catch((err) => dispatch(userSignUpFailure()))
  }
}

//sign in
export const signInUser = (user: User, history: any) => {
  return (dispatch: Dispatch) => {
    return httpRequest(`/users/signin`, {
      method: 'post',
      body: JSON.stringify(user),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((user) => {
      dispatch(userSignIn(user))
      history('/users')
    })
    .catch((err) => dispatch(userSignInError(err)))
  }
}