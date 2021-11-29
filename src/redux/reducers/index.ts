import { combineReducers } from 'redux'

import product from './product'
import books from '../books/books.reducer'
import authors from '../authors/authors.reducer'

const createRootReducer = () =>
  combineReducers({
    product,
    books,
    authors,
  })

export default createRootReducer
