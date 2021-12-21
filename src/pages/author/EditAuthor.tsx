import React, { useEffect, useState, VoidFunctionComponent } from 'react'
import { useParams } from 'react-router'
import Spinner from '../../components/Spinner'
import { Author } from '../../models/Author'
import { findOneAuthor } from '../../redux/authors/authors.action'
import FormAuthor from './FormAuthor'

const EditAuthor: VoidFunctionComponent = () => {
  const { id } = useParams()
  const [editAuthor, setEditAuthor] = useState<Author | undefined>(undefined)
  useEffect(() => {
    if (id) {
      findOneAuthor(id).then((author) => setEditAuthor(author))
    }
  }, [id])
  if (!editAuthor || !id) {
    return <Spinner />
  }
  return <FormAuthor author={editAuthor} />
}

export default EditAuthor
