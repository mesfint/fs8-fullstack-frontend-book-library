import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBookAsync } from '../../redux/actions/book'

import styled from 'styled-components'
//import { TextField, Button, Typography, Paper } from '@material-ui/core'

const Title = styled.h1`
  color: red;
`
const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const AddBook = () => {
  const [data, setData] = useState({
    bookId: '546',
    isbn: 0,
    title: '',
    publishedYear: 1900,
    coverImage: '',
    pageNumber: 0,
    quantity: 0,
    rating: 0,
    summary: '',
    categories: '',
  })

  const dispatch = useDispatch()

  const handleSubmit = (event: any) => {
    event.preventDefault()
    dispatch(addBookAsync(data))
  }
  const clear = () => {
    setData({
      bookId: '',
      isbn: 0,
      title: '',
      publishedYear: 0,
      coverImage: '',
      pageNumber: 0,
      quantity: 0,
      rating: 0,
      summary: '',
      categories: '',
    })
  }
  return (
    <div>
      <Title>Form</Title>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          placeholder="title..."
          value={data.title}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setData({ ...data, title: event.target.value })
          }
        />
        <label htmlFor="publishedYear">publishedYear</label>
        <input
          type="text"
          name="publishedYear"
          placeholder="publishedYear..."
          value={data.publishedYear}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setData({ ...data, publishedYear: +event.target.value })
          }
        />
        <label htmlFor="pageNumber">pageNumber</label>
        <input
          type="text"
          name="pageNumber"
          placeholder="pageNumber..."
          value={data.pageNumber}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setData({ ...data, pageNumber: +event.target.value })
          }
        />
        <label htmlFor="coverImage">coverImage</label>
        <input
          type="text"
          name="coverImage"
          placeholder="coverImage..."
          value={data.coverImage}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setData({ ...data, coverImage: event.target.value })
          }
        />
        <label htmlFor="quantity">Quantity</label>
        <input
          type="text"
          name="quantity"
          placeholder="quantity..."
          value={data.quantity}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setData({ ...data, quantity: +event.target.value })
          }
        />
        <label htmlFor="rating">Rating</label>
        <input
          type="text"
          name="rating"
          placeholder="rating..."
          value={data.rating}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setData({ ...data, rating: +event.target.value })
          }
        />
        <label htmlFor="summary">Summary</label>
        <input
          type="text"
          name="summary"
          placeholder="summary..."
          value={data.summary}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setData({ ...data, summary: event.target.value })
          }
        />
        <label htmlFor="category">Category</label>
        <input
          type="text"
          name="category"
          placeholder="category..."
          value={data.categories}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setData({ ...data, categories: event.target.value })
          }
        />
        <button type="submit">Submit</button>
        <button
          onClick={() => {
            clear()
          }}
        >
          Clear
        </button>
      </Form>
    </div>
  )
}

export default AddBook
