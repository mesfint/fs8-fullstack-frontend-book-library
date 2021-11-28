import React from 'react'

import { Link } from 'react-router-dom'

//import { Product, AppState } from '../types'

//import AddBook from '../components/Form/AddBook'
//import { addProduct, removeProduct } from '../redux/actions'
//import { AddBookAction, FetchBookACtion } from '../redux/actions/book'

import { Container, AppBar } from '@material-ui/core'
import useStyles from '../styles'
//import styled from 'styled-components'
import Books from '../components/Books/Books'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

// const Buttons = styled.div`
//   display: flex;
//   justify-content: right;
//   flex: 1;
// `
// const Button = styled.button`
//   display: flex;
//   margin-right: 5px;
//   justify-content: center;
//   align-items: center;
//   margin-top: 10px;
//   border-radius: 5px;
//   border: none;
//   outline: none;
//   padding: 5px;
//   font-size: 0.8rem;
// `
// const LinkButton = styled(Link)`
//   display: flex;
//   margin-right: 5px;
//   justify-content: right;
//   align-items: center;
//   margin-top: 10px;
//   text-decoration: none;
//   color: 'red';
// `

export default function Home() {
  const classes = useStyles()

  //const products = useSelector((state: AppState) => state.product.inCart)

  return (
    <>
      <Container>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Booki
            </Typography>
            <Link
              to="/Books"
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              Books
            </Link>
            <Link
              to="/AddBook"
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              Add Book
            </Link>
            <Link
              to="/Authors"
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              Authors
            </Link>
            <Link
              to="/AddAuthors"
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              Add Authors
            </Link>

            <Link to="/Login">Login</Link>
            <Link to="/SignUp" style={{ border: '3px solid #3eb269' }}>
              Sign Up
            </Link>
          </Toolbar>
        </AppBar>
        <Typography variant="h5">Currently added books</Typography>

        <Books />
      </Container>
    </>
  )
}
