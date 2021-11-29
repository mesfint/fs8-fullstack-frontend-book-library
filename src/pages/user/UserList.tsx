import React, { useEffect, useState, VoidFunctionComponent } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from '../../types'
import { fetchUsers } from '../../redux/users/users.action'
//import { deleteUser } from '../../redux/users/users.action'
import Spinner from '../../components/Spinner'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { User } from '../../models/User'

const UserList: VoidFunctionComponent = () => {
  let count = 1
  const history = useNavigate()
  const { id } = useParams()
  const dispatch = useDispatch()
  const users = useSelector((state: AppState) => state?.users)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  if (users.loading) {
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
                    Users
                  </h3>
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <Link
                    to="/authors/add"
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
                      First Name
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Last Name
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      User Name
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Email
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
                  {users.users.map((user) => (
                    <tr key={user.userId}>
                      <td className="border-t-0 px-6 py-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap  ">
                        {count++}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap  ">
                        {user.firstName}
                      </td>
                      <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap ">
                        {user.lastName}
                      </td>
                      <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap ">
                        {user.userName}
                      </td>
                      <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap ">
                        {user.email}
                      </td>

                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap ">
                        <Link
                          to="/users"
                          className="bg-yellow-200 text-black active:bg-red-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        >
                          Edit
                        </Link>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap ">
                        <Link
                          to="/users"
                          className="bg-red-500 text-white active:bg-red-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          // onClick={() =>
                          //   dispatch(deleteAuthor(author, history))
                          // }
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

export default UserList
