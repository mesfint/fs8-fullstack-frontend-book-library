import { combineReducers } from 'redux'

//import product from './product'
import books from './book'
//import bookList from './bookList'

const createRootReducer = () =>
  combineReducers({
    //product,
    books,
  })

export default createRootReducer
