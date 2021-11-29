import { Dispatch } from 'redux'
import { Author } from '../../models/Author'
import httpRequest from '../../utils/httpRequest'
import { authorsActionTypes } from './authors.type'

export const fetchAuthorsRequest = () => {
  return {
    type: authorsActionTypes.FETCH_LIST_PENDING,
  }
}

export const fetchAuthorsSuccess = (authors: Author[]) => {
  return {
    type: authorsActionTypes.FETCH_LIST_SUCCESS,
    payload: authors,
  }
}

export const fetchAuthorsFailure = (error: string) => {
  return {
    type: authorsActionTypes.FETCH_LIST_ERROR,
    payload: error,
  }
}
export const addAuthorRequest = () => {
  return {
    type: authorsActionTypes.ADD_AUTHOR_PENDING,
  }
}

export const addAuthorSuccess = (newAuthor: Author[]) => {
  return {
    type: authorsActionTypes.ADD_AUTHOR_SUCCESS,
    payload: newAuthor,
  }
}

export const addAuthorFailure = (error: string) => {
  return {
    type: authorsActionTypes.ADD_AUTHOR_ERROR,
    payload: error,
  }
}

export const deleteAuthorSuccess = (author: Author) => {
  return {
    type: authorsActionTypes.DELETE_AUTHOR_SUCCESS,
    payload: author,
  }
}

export function fetchAuthors() {
  return (dispatch: Dispatch) => {
    dispatch(fetchAuthorsRequest())
    return httpRequest(`/authors`)
      .then((authors) => dispatch(fetchAuthorsSuccess(authors)))
      .catch((err) => dispatch(fetchAuthorsFailure(err)))
  }
}

export const postAuthor = (author: Author, history: any) => {
  return (dispatch: Dispatch) => {
    dispatch(addAuthorRequest())
    return httpRequest(`/authors`, {
      method: 'post',
      body: JSON.stringify(author),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((author) => {
        dispatch(addAuthorSuccess(author))
        history('/authors')
      })
      .catch((err) => dispatch(addAuthorFailure(err)))
  }
}

export const deleteAuthor = (author: Author, history: any) => {
  return async (dispatch: Dispatch) => {
    try {
      await httpRequest(`/authors/${author._id}`, {
        method: 'delete',
      })
      return dispatch(deleteAuthorSuccess(author))
      history.push('/authors')
    } catch (err) {
      return console.log(err)
    }
  }
}
