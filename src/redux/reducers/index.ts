import { combineReducers } from 'redux'

import product from './product'
import books from '../books/books.reducer'
import authors from '../authors/authors.reducer'
import users from '../users/users.reducer'
import userBooks from '../userbooks/userBooks.reducer'
import authentic from '../authentic/auth.reducer.google'

const createRootReducer = () =>
  combineReducers({
    product,
    books,
    authors,
    users,
    userBooks,
    authentic,
  })

export default createRootReducer
