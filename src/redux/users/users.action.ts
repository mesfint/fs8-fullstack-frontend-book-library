import { Dispatch } from 'redux'
import { User } from '../../models/User'
import httpRequest from '../../utils/httpRequest'
import { userSignUpFailure, userSignUpSuccess } from '../auths/auth.action'
import { userActionTypes } from './users.types'

export const fetchUsersRequest = () => {
  return {
    type: userActionTypes.FETCH_LIST_PENDING,
  }
}

export const fetchUsersSuccess = (users: User[]) => {
  return {
    type: userActionTypes.FETCH_LIST_SUCCESS,
    payload: users,
  }
}

export const fetchUsersFailure = (error: string) => {
  return {
    type: userActionTypes.FETCH_LIST_ERROR,
    payload: error,
  }
}
export const addUserRequest = () => {
  return {
    type: userActionTypes.ADD_USER_PENDING,
  }
}

export const addUserSuccess = (newUser: User[]) => {
  return {
    type: userActionTypes.SIGN_UP,
    payload: newUser,
  }
}

export const addUserFailure = (error: string) => {
  return {
    type: userActionTypes.ADD_USER_ERROR,
    payload: error,
  }
}

export const deleteUserSuccess = (userId: string) => {
  return {
    type: userActionTypes.DELETE_USER_SUCCESS,
    payload: userId,
  }
}

export function fetchUsers() {
  return (dispatch: Dispatch) => {
    dispatch(fetchUsersRequest())
    return httpRequest(`/users`)
      .then((users) => dispatch(fetchUsersSuccess(users)))
      .catch((err) => dispatch(fetchUsersFailure(err)))
  }
}

export const registerUser = (user: User, history: any) => {
  return (dispatch: Dispatch) => {
    dispatch(addUserRequest())
    return httpRequest(`/users/signup`, {
      method: 'post',
      body: JSON.stringify(user),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((user) => {
      dispatch(userSignUpSuccess(user))
      history('/users')
    })
    .catch((err) => dispatch(userSignUpFailure()))
  }
}


export const editUser = (user: User, history: any) => {
  return (dispatch: Dispatch) => {
    dispatch(addUserRequest())
    return httpRequest(`/users/${user._id}`, {
      method: 'put',
      body: JSON.stringify(user),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((user) => {
        dispatch(addUserSuccess(user))
        history('/users')
      })
      .catch((err) => dispatch(addUserFailure(err)))
  }
}

export const deleteUser = (userId: string) => {
  return async (dispatch: Dispatch) => {
    try {
      await httpRequest(`/users/${userId}`, {
        method: 'delete',
      })
      dispatch(deleteUserSuccess(userId))
    } catch (err) {
      return console.log({ err })
    }
  }
}

export const findOneUser = async (userId: string) => {
  try {
    const user = await httpRequest(`/users/${userId}`, {
      method: 'GET',
    })
    return user
  } catch (err) {
    return null
  }
}
