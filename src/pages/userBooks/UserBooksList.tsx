import React, { useState, useEffect, VoidFunctionComponent } from 'react'
import { fetchUserBooks } from '../../redux/userbooks/userBooks.action'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../../components/Spinner'
import { AppState } from '../../types'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { UserBook } from '../../models/UserBook'
import { User } from '../../models/User'

const UserBooksList: VoidFunctionComponent = () => {
  const userBooks = useSelector((state: AppState) => state?.userBooks.userBooks)
  const users = useSelector((state: AppState) => state?.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUserBooks())
  }, [dispatch])
  console.log('userBooks=>', userBooks)
  let count = 1
  return (
    <>
      <section className="py-1 bg-blueGray-50">
        <div className="w-full xl:w-10/12 xl:mb-0 px-4 mx-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-blueGray-700">
                    Borrowed Books
                  </h3>
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
                      User
                    </th>

                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Date Borrowed
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Date Returning
                    </th>

                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Edit
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {userBooks.map((userBook) => (
                    <tr key={userBook.bookId}>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap  ">
                        {count++}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap  ">
                        {userBook.book.title}
                      </td>

                      <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap ">
                        {'first name'}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap ">
                        {moment(userBook.borrowDate).format('MMM Do YYYY')}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap ">
                        {moment(userBook.returnDate).format('MMM Do YYYY')}
                      </td>

                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap ">
                        <Link
                          to={''}
                          className="bg-yellow-200 text-black active:bg-red-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        >
                          Edit
                        </Link>
                      </td>
                      <td>
                        <Link
                          to="/userBooks"
                          className="bg-red-500 text-white active:bg-red-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none ml-2 mb-1 ease-linear transition-all duration-150"
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
    </>
  )
}

export default UserBooksList
