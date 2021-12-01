import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ImageWithFallback from '../components/Image'
import { AppState } from '../types'
import { generateRating } from '../utils/starGen'

export default function Home() {
  const dispatch = useDispatch()
  const books = useSelector((state: AppState) => state.books)

  return (
    <>
      <div className="flex items-center justify-left mt-3 mb-3">
        <div className="flex border-2 rounded">
          <input
            type="text"
            className="px-4 py-2 w-10/12"
            placeholder="Search..."
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
      <h1 className="text-lg text-black font-bold py-2 my-2">
        Currently added books
      </h1>

      <div className="h-74 grid grid-rows-2 grid-flow-col gap-6 ">
        {books.books.map((book) => (
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
