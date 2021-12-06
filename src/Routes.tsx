import React from 'react'
// import { Switch, Route } from 'react-router-dom' // old
import { Routes as Switch, Route } from 'react-router-dom' // updated to latest
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
  title: string
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
  { path: '/users/auth', element: <LoginForm />, title: 'Add new user' },

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
    path: '/userBooks/BorrowBook',
    element: <BorrowBook />,
    title: 'Borrow book',
  },
]

const Routes = () => (
  <Switch>
    {routerList.map((route, index) => (
      <Route key={index} path={route.path} element={route.element} />
    ))}
  </Switch>
)

export default Routes
