import React, { useEffect, useState, VoidFunctionComponent } from 'react'
import { useParams } from 'react-router'
import Spinner from '../../components/Spinner';
import { Book } from '../../models/Book';
import { findOneBook } from '../../redux/books/books.action';
import FormBook from './FormBook'

const EditBook: VoidFunctionComponent = () => {
  const {id} = useParams();
  const [editBook, setEditBook] = useState<Book | undefined>(undefined)
  useEffect(() => {
    if(id) {
      findOneBook(id).then(book => setEditBook(book));
    }
  }, [id])
  if(!editBook || !id) {
    return <Spinner />
  }
  return <FormBook book={editBook} />
}

export default EditBook
