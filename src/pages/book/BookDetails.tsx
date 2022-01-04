import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Spinner from '../../components/Spinner'
import { Author } from '../../models/Author'
import { borrowBook } from '../../redux/userbooks/userBooks.action'
import { AppState } from '../../types'
import { useNavigate } from 'react-router-dom'
import useLogged from '../../utils/useLogged'
import moment from 'moment'

const BookDetails = () => {
  const { _id } = useParams()
  const history = useNavigate()
  const { user } = useLogged()
  const dispatch = useDispatch()

  const book = useSelector((state: AppState) =>
    state.books?.books.find((book) => book._id === _id)
  )

  const borrowBookRequest = () => {
    if (book?._id && user?.user._id) {
      dispatch(
        borrowBook(
          {
            bookId: book?._id,
            userId: user?.user._id,
            borrow: true,
            borrowDate: moment().format('L').toString(),
          },
          history
        )
      )
    }
  }

  return (
    <div>
      <div className=" border-r border-l border-b  border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-l lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="flex gap-5">
          <div>
            <img
              className="h-30 w-30 "
              src={book?.coverImage}
              alt={book?.title}
            />
          </div>
          <div className="text-gray-900 font-bold text-xl mb-4">
            {book?.title}

            <p className="text-sm leading-none my-2  ">
              <span className="text-gray-600 font-medium mr-1">Author: </span>{' '}
              {book?.author?.firstName}
            </p>

            <p className="text-sm">
              <span className="text-gray-600 font-medium mr-1">
                {' '}
                Published Year:
              </span>
              {book?.publishedYear}
            </p>

            <p className="text-sm leading-none my-2">
              <span className="text-gray-600 font-medium mr-1"> Genre:</span>
              {book?.category}
            </p>

            <p className="text-green-600 text-xs">
              {book?.quantity} books Available
            </p>
          </div>
          <div>
            <button
              className="bg-gray-500 hover:bg-indigo-400 text-white font-md py-1 px-2 rounded"
              onClick={() => {
                borrowBookRequest()
              }}
            >
              {book?.quantity === 0 ? 'Request it' : 'Borrow it'}
            </button>
          </div>
        </div>

        <div>
          <p className="text-gray-600 text-base my-3">{book?.summary}.</p>
        </div>
      </div>
    </div>
  )
}

export default BookDetails
