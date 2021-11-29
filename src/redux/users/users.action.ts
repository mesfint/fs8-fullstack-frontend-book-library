import { Dispatch } from 'redux'
import { User } from '../../models/User'
import httpRequest from '../../utils/httpRequest'
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
    type: userActionTypes.ADD_USER_SUCCESS,
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

export const postUser = (user: User, history: any) => {
  return (dispatch: Dispatch) => {
    dispatch(addUserRequest())
    return httpRequest(`/users`, {
      method: 'post',
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

// export const editBook = (book: Book, history: any) => {
//   return (dispatch: Dispatch) => {
//     dispatch(addBookRequest())
//     return httpRequest(`/books/${book._id}`, {
//       method: 'put',
//       body: JSON.stringify(book),
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((book) => {
//         dispatch(addBookSuccess(book))
//         history('/books')
//       })
//       .catch((err) => dispatch(addBookFailure(err)))
//   }
// }

// export const deleteBook = (bookId: string) => {
//   return async (dispatch: Dispatch) => {
//     try {
//       await httpRequest(`/books/${bookId}`, {
//         method: 'delete',
//       })
//       dispatch(deleteBookSuccess(bookId))
//     } catch (err) {
//       return console.log({ err })
//     }
//   }
// }

// export const findOneBook = async (bookId: string) => {
//   try {
//     const book = await httpRequest(`/books/${bookId}`, {
//       method: 'GET',
//     })
//     return book
//   } catch (err) {
//     return null
//   }
// }
