import { createStore, applyMiddleware, compose, Middleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import reduxImmutableState from 'redux-immutable-state-invariant'

import { AppState } from '../types'
import createRootReducer from './reducers'
import rootSaga from './sagas'
import { initialBooksState } from './books/books.reducer'

const initState: AppState = {
  product: {
    inCart: [],
  },
  books: initialBooksState,
}

export default function makeStore(initialState = initState) {
  const sagaMiddleware = createSagaMiddleware()
  let middlewares: Middleware<any, any, any>[] = [sagaMiddleware, thunk]
  let composeEnhancers = compose

  if (process.env.NODE_ENV === 'development') {
    const immutableRedux = reduxImmutableState({})
    middlewares.push(immutableRedux)
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  const store = createStore(
    createRootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  sagaMiddleware.run(rootSaga)

  if ((module as any).hot) {
    ;(module as any).hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
