import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import Spinner from '../../components/Spinner'
import { AppState } from '../../types'

const BookDetails = () => {
  const { _id } = useParams()

  const book = useSelector((state: AppState) =>
    state.books?.books.find((book) => book._id === _id)
  )

  const handleBorrow = book?.quantity === 0 ? 'Request it' : 'Borrow it'
  return (
    <div>
      <div className=" border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="flex gap-5">
          <div>
            <img src={book?.coverImage} alt={book?.title} />
          </div>

          <div className="text-gray-900 font-bold text-xl mb-4">
            {book?.title}

            <p className="text-sm leading-none my-2">John Smith</p>
            <p className="text-sm">{book?.publishedYear}</p>
            <p className="text-green-600 text-xs">
              {book?.quantity} books Available
            </p>
            <p className="text-sm leading-none my-2">{book?.category}</p>
          </div>
          <div>
            <button className="bg-gray-500 hover:bg-indigo-400 text-white font-md py-1 px-2 rounded">
              {' '}
              {handleBorrow}
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
