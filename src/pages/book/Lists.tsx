import React, { useEffect, useState, VoidFunctionComponent } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from '../../types'
import { fetchBooks } from '../../redux/books/books.action'
import Layout from '../../components/layout/Layout'
import { deleteBook } from '../../redux/books/books.action'
import Spinner from '../../components/Spinner'
import ImageWithFallback from '../../components/Image'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Modal from '../../components/Modal'
import { Book } from '../../models/Book'

const BookList: VoidFunctionComponent = () => {
  const history = useNavigate()
  const { id } = useParams()
  const books = useSelector((state: AppState) => state?.books)
  const [deleteBookId, setDeleteBookId] = useState<string | null>(null);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBooks())
  }, [])
  const deleteBookCallback = (bookId: string) => {
    dispatch(deleteBook(bookId));
    setDeleteBookId(null);
    dispatch(fetchBooks())
  }
  if (books.loading) {
    return <Spinner />
  }
  return (
    <>
      <section className="py-1 bg-blueGray-50">
        <div className="w-full xl:w-10/12 xl:mb-0 px-4 mx-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-blueGray-700">
                    Books
                  </h3>
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <Link
                    to="/books/add"
                    className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  >
                    Add new
                  </Link>
                </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto">
              <table className="items-center bg-transparent w-full border-collapse ">
                <thead>
                  <tr>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      #
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Title
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Published Year
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Quantity
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Rating
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {books.books.map((book) => (
                    <tr key={book._id}>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap  text-left text-blueGray-700 ">
                        <ImageWithFallback
                          src={book.coverImage}
                          alt={book.title}
                          className="h-20 w-20"
                        />
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap  ">
                        {book.title}
                      </td>
                      <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap ">
                        {book.publishedYear}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap ">
                        {book.quantity}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap ">
                        {book.rating}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap ">
                        <Link
                          to={`/books/${book._id}/edit`}
                          className="bg-yellow-200 text-black active:bg-red-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        >
                          Edit
                        </Link>
                        <Link
                          to="/books"
                          className="bg-red-500 text-white active:bg-red-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          onClick={() => setDeleteBookId(book._id)}
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      {deleteBookId && (
        <Modal
          title="Delete confirmation"
          onAccept={() => deleteBookCallback(deleteBookId)}
          onCancel={() => setDeleteBookId(null)}
        >
          Are you sure to delete this item ?
        </Modal>
      )}
    </>
  )
}
export default BookList
