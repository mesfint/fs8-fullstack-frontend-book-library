import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, CircularProgress } from '@material-ui/core'
import { AppState } from '../../types/bookTypes'

import Book from './Book/Book'
import useStyles from './styles'
import { fetchBooksAsync } from '../../redux/actions/book'

const Books = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const books = useSelector((state: AppState) => state.books.allBooks)

  useEffect(() => {
    dispatch(fetchBooksAsync())
  }, [dispatch])
  return (
    <>
      {books.length === 0 ? (
        <CircularProgress className={classes.spinner} />
      ) : (
        <Grid
          alignItems="stretch"
          // justify="space-between"
          spacing={3}
          container
          className={classes.grid}
        >
          {books.map((book) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={book.bookId}>
              <Book book={book} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  )
}

export default Books
