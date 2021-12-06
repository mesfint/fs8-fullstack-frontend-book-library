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

export const deleteAuthorSuccess = (authorId: string) => {
  return {
    type: authorsActionTypes.DELETE_AUTHOR_SUCCESS,
    payload: authorId,
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

export const editAuthor = (author: Author, history: any) => {
  return (dispatch: Dispatch) => {
    dispatch(addAuthorRequest())
    return httpRequest(`/authors/${author._id}`, {
      method: 'put',
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

export const deleteAuthor = (authorId: string) => {
  return async (dispatch: Dispatch) => {
    try {
      await httpRequest(`/authors/${authorId}`, {
        method: 'delete',
      })
      return dispatch(deleteAuthorSuccess(authorId))
    } catch (err) {
      return console.log(err)
    }
  }
}

//to complete the edit a book need to get a book by id
export const findOneAuthor = async (authorId: string) => {
  try {
    const author = await httpRequest(`/authors/${authorId}`, {
      method: 'GET',
    })
    return author
  } catch (err) {
    return null
  }
}
