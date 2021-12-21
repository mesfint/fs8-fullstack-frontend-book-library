import React from 'react'
// import { Switch, Route } from 'react-router-dom' // old
import { Routes as Switch, Route } from 'react-router-dom' // updated to latest
<<<<<<< .merge_file_QcecnZ
import type { PathRouteProps } from 'react-router'
//https://reactrouter.com/docs/en/v6/upgrading/v5
//https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom

import Home from './pages/Home'
import AddBook from './components/Form/AddBook'
import Books from './components/Books/Books'
import AddAuthors from './components/Form/AddAuthors'
import Authors from './components/Authors/Authors'
import Product from './pages/Product'
=======
import BookList from './pages/book/Lists'
import type { PathRouteProps } from 'react-router'
import Home from './pages/Home'
import { IconType } from './components/svg/icons'
import AddNew from './pages/book/AddNew'
import LoginForm from './pages/Auth/LoginForm'
import AuthorList from './pages/author/AuthorList'
import UserList from './pages/user/UserList'
import EditBook from './pages/book/EditBook'
import BookDetails from './pages/book/BookDetails'
import EditUser from './pages/user/EditUser'
import AddNewAuthor from './pages/author/AddNewAuthor'
import EditAuthor from './pages/author/EditAuthor'
import UserBooksList from './pages/userBooks/UserBooksList'
import BorrowBook from './pages/userBooks/BorrowBook'
import FormUser from './pages/user/FormUser'

type PathRouterType = PathRouteProps & {
  icon?: IconType
  title?: string
}

export const routerList: PathRouterType[] = [
  { path: '/', element: <Home />, icon: 'home', title: 'Home' },
  { path: '/books', element: <BookList />, icon: 'books', title: 'Books' },
  { path: '/book/:_id', element: <BookDetails />, title: '' },
  { path: '/books/add', element: <AddNew />, title: 'Add new book' },
  { path: '/books/:id/edit', element: <EditBook />, title: 'Edit book' },

  { path: '/users', element: <UserList />, icon: 'users', title: 'Users' },
  { path: '/users/:id/edit', element: <EditUser />, title: 'Users' },
  { path: '/users/add', element: <FormUser />, title: 'Add new user' },
  { path: '/users/auth', element: <LoginForm />, title: 'Login' },

  {
    path: '/authors',
    element: <AuthorList />,
    icon: 'authors',
    title: 'Authors',
  },
  { path: '/authors/add', element: <AddNewAuthor />, title: 'Add new author' },
  { path: '/authors/:id/edit', element: <EditAuthor />, title: 'Authors' },

  {
    path: '/userBooks',
    element: <UserBooksList />,
    icon: 'userBooks',
    title: 'Borrowed Books',
  },
  {
    path: '/userBooks/BorrowBook/:_id',
    element: <BorrowBook />,
    title: 'Borrow book',
  },
]
>>>>>>> .merge_file_NQJiR5

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
<<<<<<< .merge_file_QcecnZ
    <Route path="/" element={<Home />} />
    <Route path="/AddBook" element={<AddBook />} />
    <Route path="/Books" element={<Books />} />
    <Route path="/Authors" element={<Authors />} />
    <Route path="/AddAuthors" element={<AddAuthors />} />
    <Route path="/products/:id" element={<Product />} />
=======
    {routerList.map((route, index) => (
      <Route key={index} path={route.path} element={route.element} />
    ))}
>>>>>>> .merge_file_NQJiR5
  </Switch>
)

export default Routes
