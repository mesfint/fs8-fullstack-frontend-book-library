import React from 'react'
// import { Switch, Route } from 'react-router-dom' // old
import { Routes as Switch, Route } from 'react-router-dom' // updated to latest
import BookList from './pages/book/Lists'
import type { PathRouteProps } from 'react-router'
//https://reactrouter.com/docs/en/v6/upgrading/v5
//https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom

import Home from './pages/Home'
import Product from './pages/Product'
import { IconType } from './components/svg/icons'
import AddNew from './pages/book/AddNew'
import AuthorList from './pages/author/AuthorList'
import EditBook from './pages/book/EditBook'

type PathRouterType = PathRouteProps & {
  icon?: IconType
  title: string
}

export const routerList: PathRouterType[] = [
  { path: '/', element: <Home />, icon: 'home', title: 'Home' },
  { path: '/products/:id', element: <Product />, title: 'Product' },
  { path: '/books', element: <BookList />, icon: 'books', title: 'Books' },
  { path: '/users', element: <BookList />, icon: 'users', title: 'Users' },
  {
    path: '/authors',
    element: <AuthorList />,
    icon: 'authors',
    title: 'Authors',
  },
  { path: '/books/add', element: <AddNew />, title: 'Add new book' },
  { path: '/books/:id/edit', element: <EditBook />, title: 'Edit book' },
]

const Routes = () => (
  <Switch>
    {routerList.map((route, index) => (
      <Route key={index} path={route.path} element={route.element} />
    ))}
  </Switch>
)

export default Routes
