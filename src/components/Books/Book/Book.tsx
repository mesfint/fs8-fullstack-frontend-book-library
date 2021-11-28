import React from 'react'
import { BookType } from '../../../types/bookTypes'
import useStyles from './styles'
import noImage from '../../../images/noImage.png'
import { generateRating } from '../../../utils/'

import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from '@material-ui/core'
// import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { useDispatch } from 'react-redux'
import { deleteBookAsync } from '../../../redux/actions/book'
//import { addBookAsync } from '../../../redux/actions/book'

type BookProps = {
  book: BookType
}

const Book = ({ book }: BookProps) => {
  const dispatch = useDispatch()
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={book.coverImage || noImage} />
      {/* {book.title} */}

      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small">
          {/* <MoreHorizIcon fontSize="default" /> */}
        </Button>
      </div>

      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {book.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {generateRating(book.rating)}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary">
          {/* <ThumbUpAltIcon fontSize="small" /> Like {book.rating}{' '} */}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deleteBookAsync(book.bookId))}
        >
          <DeleteIcon style={{ fontSize: 'medium', color: '#3eb269' }} />
        </Button>
      </CardActions>
    </Card>
  )
}
export default Book
