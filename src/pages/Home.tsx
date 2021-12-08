import React, { useEffect, useRef, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ImageWithFallback from '../components/Image'
import { AppState } from '../types'
import { Book } from '../models/Book'
import { generateRating } from '../utils/starGen'
import { fetchBooks, searchBookRequest } from '../redux/books/books.action'

function Home() {
  const dispatch = useDispatch()
  const books = useSelector((state: AppState) => state.books?.filteredBooks)
  const inputRef = useRef<HTMLInputElement>(null)

  const searchTerm = useSelector((state: AppState) => state.books.searchTerm)
  //return a book with max rating

  const catagory = ['Science', 'History', 'Poetry', 'Sci-Fiction']

  //filter books by catagory
  const filterBooks = (catagory: string) => {
    dispatch(searchBookRequest(catagory))
  }

  useEffect(() => {
    dispatch(fetchBooks())
  }, [])

  useLayoutEffect(() => {
    inputRef.current?.focus()
  })

  return (
    <>
      <div className="flex items-center max-w-md mx-auto text-sm w-80  mt-3 mb-3 ">
        <div className="  border-2 rounded flex md:items-center mb-6 ">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => dispatch(searchBookRequest(e.target.value))}
            className="px-4 py-2"
            placeholder="Search by title,author or genre..."
            ref={inputRef}
          />
          <button className="flex items-center justify-center px-4 border-l">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </button>
        </div>
      </div>
      <h1 className="text-lg font-bold mb-3 mt-12 text-center ">Book Genres</h1>

      <div className="flex mb-5 mt-5 justify-center">
        <button
          className="flex-none bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-4 border border-gray-400 rounded-lg mr-2"
          onClick={() => dispatch(fetchBooks())}
        >
          All
        </button>

        {catagory.map((catagory) => (
          <button
            key={catagory}
            className="flex-none bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-4 border border-gray-400 rounded-lg mr-2"
            onClick={() => filterBooks(catagory)}
          >
            {catagory}
          </button>
        ))}
      </div>

      <h1 className="text-lg text-black text-center font-bold py-2 my-2">
        Currently added books
      </h1>

      <div className="h-74 grid grid-rows-2 grid-flow-col gap-20 justify-center ">
        {books.map((book) => (
          <div key={book.bookId} className=" py-6 font-normal  ">
            <Link to={`/book/${book._id}`}>
              <th>
                <ImageWithFallback
                  src={book.coverImage}
                  alt={book.title}
                  className="h-25 w-25"
                />
              </th>
            </Link>
            <br />
            {book.title}
            <br />
            {generateRating(book.rating)}
          </div>
        ))}
      </div>
    </>
  )
}
export default Home
