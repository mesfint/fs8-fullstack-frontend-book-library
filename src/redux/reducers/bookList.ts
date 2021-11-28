import { FETCH_BOOKS, BookState, FetchBookAction } from '../../types/bookTypes'

const initialState: BookState = { allBooks: [] }

export default function book(state = initialState, action: FetchBookAction) {
  switch (action.type) {
    case FETCH_BOOKS:
      return {
        ...state,
        allBooks: action.payload.book,
      }

    default:
      return state
  }
}
