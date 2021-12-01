import React, { ChangeEvent, useState, VoidFunctionComponent } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from '../../types'
import { editUser, postUser } from '../../redux/users/users.action'
import Spinner from '../../components/Spinner'
import { Link } from 'react-router-dom'
import { User } from '../../models/User'
import ErrorMessage from '../../components/Error'
import { useNavigate } from 'react-router-dom'

type FormUserType = { user?: User }
const FormUser: VoidFunctionComponent<FormUserType> = ({
  user = {
    userId: '',
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
  } as User,
}) => {
  const users = useSelector((state: AppState) => state?.users)
  const dispatch = useDispatch()
  const history = useNavigate()
  const { userId } = useParams()

  const [userFormValue, setuserFormValue] = useState<User>(user)
  const [submitForm, setsubmitForm] = useState(false)

  const userSubmitForm = () => {
    setsubmitForm(true)
    const isEmpty = Object.values(userFormValue).every(
      (x) =>
        //x is a string, so it will never match the number 0.  either convert
        //it to an integer with parseInt, or compare it to "0"
        // x === null || !(x as string).length || parsInt(x) === 0 || typeof x === undefined
        x === null || !(x as string).length || typeof x === undefined
    )
    if (!isEmpty) {
      if (user._id) {
        dispatch(editUser(userFormValue, history))
      } else {
        dispatch(postUser(userFormValue, history))
      }
    }
    dispatch(postUser(userFormValue, history))
  }
  if (users.loading) {
    return <Spinner />
  }

  return (
    <>
      <div className="w-full xl:w-10/12 xl:mb-0 px-4 mx-auto bg-white p-4 shadow-lg">
        <div className="grid  gap-8 grid-cols-1">
          <div className="flex flex-col ">
            <div className="flex flex-col sm:flex-row items-center">
              <h2 className="font-semibold text-lg mr-auto">
                {user._id ? 'Edit user' : 'Add new user'}
              </h2>
              <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0" />
            </div>
            <div className="mt-5">
              {users.error && <ErrorMessage error={users.error} />}
              <div className="form">
                <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label
                      htmlFor="firstName"
                      className="font-semibold text-gray-600 py-2"
                    >
                      First Name
                      <abbr className="text-red-500" title="required">
                        *
                      </abbr>
                    </label>
                    <input
                      placeholder="First name"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required
                      type="string"
                      name="firstName"
                      id="firstName"
                      value={userFormValue?.firstName}
                      onChange={(e) =>
                        setuserFormValue({
                          ...userFormValue,
                          firstName: e.target.value,
                        })
                      }
                    />
                    {submitForm && !userFormValue.firstName && (
                      <p className="text-red-500 text-xs">
                        Please fill out this field.
                      </p>
                    )}
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label
                      htmlFor="lastName"
                      className="font-semibold text-gray-600 py-2"
                    >
                      Last name
                      <abbr className="text-red-500" title="required">
                        *
                      </abbr>
                    </label>
                    <input
                      placeholder="Last Name"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required
                      type="string"
                      name="lastName"
                      id="lastName"
                      value={userFormValue?.lastName}
                      onChange={(e) =>
                        setuserFormValue({
                          ...userFormValue,
                          lastName: e.target.value,
                        })
                      }
                    />
                    {submitForm && !userFormValue.lastName && (
                      <p className="text-red-500 text-xs">
                        Please fill out this field.
                      </p>
                    )}
                  </div>
                </div>
                <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label
                      htmlFor="quantity"
                      className="font-semibold text-gray-600 py-2"
                    >
                      User name
                      <abbr className="text-red-500" title="required">
                        *
                      </abbr>
                    </label>
                    <input
                      placeholder="User name"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required
                      type="string"
                      name="userName"
                      id="userName"
                      value={userFormValue?.userName}
                      onChange={(e) =>
                        setuserFormValue({
                          ...userFormValue,
                          userName: e.target.value,
                        })
                      }
                    />
                    {submitForm && !userFormValue.userName && (
                      <p className="text-red-500 text-xs">
                        Please fill out this field.
                      </p>
                    )}
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label
                      htmlFor="email"
                      className="font-semibold text-gray-600 py-2"
                    >
                      Email
                      <abbr className="text-red-500" title="required">
                        *
                      </abbr>
                    </label>
                    <input
                      placeholder="Email"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required
                      type="string"
                      name="email"
                      id="email"
                      value={userFormValue?.email}
                      onChange={(e) =>
                        setuserFormValue({
                          ...userFormValue,
                          email: e.target.value,
                        })
                      }
                    />
                    {submitForm && !userFormValue.email && (
                      <p className="text-red-500 text-xs">
                        Please fill out this field.
                      </p>
                    )}
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label
                      htmlFor="password"
                      className="font-semibold text-gray-600 py-2"
                    >
                      Password
                      <abbr className="text-red-500" title="required">
                        *
                      </abbr>
                    </label>
                    <input
                      placeholder="Password"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required
                      type="password"
                      name="password"
                      id="password"
                      value={userFormValue?.password}
                      onChange={(e) =>
                        setuserFormValue({
                          ...userFormValue,
                          password: e.target.value,
                        })
                      }
                    />
                    {submitForm && !userFormValue.password && (
                      <p className="text-red-500 text-xs">
                        Please fill out this field.
                      </p>
                    )}
                  </div>
                </div>

                <p className="text-xs text-red-500 text-right my-3">
                  Required fields are marked with an asterisk
                  <abbr className="text-red-500" title="Required field">
                    *
                  </abbr>
                </p>
                <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                  <Link
                    to="/users"
                    className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm txt-center shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
                  >
                    Cancel
                  </Link>
                  <button
                    onClick={() => userSubmitForm()}
                    className="mb-2 md:mb-0 bg-indigo-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FormUser
