import { combineReducers } from 'redux'

import product from './product'
import books from '../books/books.reducer'

const createRootReducer = () =>
  combineReducers({
    product,
    books
  })

export default createRootReducer
