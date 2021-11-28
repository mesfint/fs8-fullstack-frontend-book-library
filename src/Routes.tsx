import React from 'react'
// import { Switch, Route } from 'react-router-dom' // old
import { Routes as Switch, Route } from 'react-router-dom' // updated to latest
import type { PathRouteProps } from 'react-router'
//https://reactrouter.com/docs/en/v6/upgrading/v5
//https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom

import Home from './pages/Home'
import AddBook from './components/Form/AddBook'
import Books from './components/Books/Books'
import AddAuthors from './components/Form/AddAuthors'
import Authors from './components/Authors/Authors'
import Product from './pages/Product'

type PathType = PathRouteProps & {
  title: string
}

export const RouteList: PathType[] = []
export const routerList: PathType[] = [
  { path: '/', element: <Home />, title: 'Home' },
  { path: '/products/:id', element: <Product />, title: 'Product' },
  { path: '/books', element: <Books />, title: 'Books' },
  { path: '/books/add', element: <AddBook />, title: 'Add new book' },
  { path: '/books/add', element: <Authors />, title: 'Add new book' },
  { path: '/books/add', element: <AddAuthors />, title: 'Add new book' },
]

const Routes = () => (
  <Switch>
    <Route path="/" element={<Home />} />
    <Route path="/AddBook" element={<AddBook />} />
    <Route path="/Books" element={<Books />} />
    <Route path="/Authors" element={<Authors />} />
    <Route path="/AddAuthors" element={<AddAuthors />} />
    <Route path="/products/:id" element={<Product />} />
  </Switch>
)

export default Routes
