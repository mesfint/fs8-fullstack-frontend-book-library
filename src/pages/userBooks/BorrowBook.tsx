import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Spinner from '../../components/Spinner'
import { AppState } from '../../types'

const BorrowBook = () => {
  const { _id } = useParams()

  const book = useSelector((state: AppState) =>
    state.books?.books.find((book) => book._id === _id)
  )

  //check if user has book
  // const checkUserBook = (userBook: UserBook) => {
  //   return async (dispatch: Dispatch) => {
  //     const userBooks = await httpRequest('/userbooks')
  //     const userBookExists = userBooks.find(
  //       (userBook: { userId: string; bookId: string }) =>
  //         userBook.userId === user._id &&
  //         userBook.bookId === book?._id
  //     )
  //     if (userBookExists) {
  //       return dispatch(borrowBookFailure('Book already borrowed'))
  //     } else {
  //       return dispatch(borrowBookSuccess(userBook))
  //     }
  //   }
  // }

  return (
    <div>
      Boorow now
      <div className=" border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
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

            <p className="text-green-600 text-xs">
              {book?.quantity} books Available
            </p>

            {/* <p className="text-green-600 text-xs">
              {book?.quantity } books Available
            </p> */}
          </div>
          <div>
            <Link
              className="bg-gray-500 hover:bg-indigo-400 text-white font-md py-1 px-2 rounded"
              to="/userBooks/BorrowBook"
            >
              Add to cart
            </Link>
          </div>
        </div>

        <div>
          <p className="text-gray-600 text-base my-3">{book?.summary}.</p>
        </div>
      </div>
    </div>
  )
}

export default BorrowBook