import React, { ChangeEvent, useState, VoidFunctionComponent } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import GoogleLogin from 'react-google-login'
import axios from 'axios'
import { AppState } from '../../types'
import { editUser, postUser } from '../../redux/users/users.action'
import Spinner from '../../components/Spinner'
import { User } from '../../models/User'
import ErrorMessage from '../../components/Error'
import { useNavigate } from 'react-router-dom'
import { apiUrl } from '../../utils/httpRequest'
import { googleLoginSuccess } from '../../redux/authentic/auths.action'

type FormUserType = { user?: User }

const Login: VoidFunctionComponent<FormUserType> = ({
  user = {
    userId: '',
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    password2: '',
  } as User,
}) => {
  const users = useSelector((state: AppState) => state?.users)
  const dispatch = useDispatch()
  const history = useNavigate()
  const { userId } = useParams()
  const [userFormValue, setuserFormValue] = useState<User>(user)
  const [submitForm, setsubmitForm] = useState(false)
  const [isSignup, setIsSignup] = useState(false)

  const userSubmitForm = () => {
    setsubmitForm(true)
    const isEmpty = Object.values(userFormValue).every(
      (x) => x === null || !(x as string).length || typeof x === undefined
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
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
  }

  const responseGoogle = async (response: any) => {
    //console.log({ idToken: response.profileObj })
    const output = response?.profileObj
    const token = response?.tokenObj

    // const output = {
    //   idToken: response?.profileObj,
    // }
    // const token = {
    //   idToken: response?.tokenId,
    // }
    console.log('output==>', output)
    console.log('token==>', token)
    try {
      let res: any = await axios.post(
        `${apiUrl}/users/google-authenticate`,
        // id_token will be sent to back end that we are confirmed by google let us
        // go
        {
          id_token: response.tokenObj.id_token,
          id: response.googleId,
          firstName: response.profileObj.givenName,
          lastName: response.profileObj.familyName,
          email: response.profileObj.email,
          imageUrl: response.profileObj.imageUrl,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            //'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
        }
      )
      console.log('RSSSS', res)
      if (res.data.token) {
        dispatch(
          googleLoginSuccess({ token: res.data.token, user: res.data.user })
        )
      }
      history('/users')
    } catch (error) {
      console.log('Error', error)
    }
  }

  const handleIsSignup = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup)
  }

  return (
    <>
      <div className="w-full xl:w-10/12 xl:mb-0 px-4 mx-auto bg-white p-4 shadow-lg">
        <div className="grid  gap-8 grid-cols-1">
          <div className="flex flex-col ">
            <div className="flex flex-col sm:flex-row items-center">
              <h2 className="font-semibold text-lg mr-auto">
                {isSignup ? 'Create account' : 'Login to your account'}
              </h2>
              <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0" />
            </div>
            <div className="mt-5">
              {users.error && <ErrorMessage error={users.error} />}
              <div className="form">
                {isSignup && (
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
                  </div>
                )}

                <div className="md:flex flex-row md:space-x-4 w-full text-xs">
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
                      <input
                        placeholder="Password"
                        className="appearance-none mt-2 block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
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
                    </label>
                  </div>
                  {/* {isSignup && (
                    <div className="mb-3 space-y-2 w-full text-xs">
                      <label
                        htmlFor="password2"
                        className="font-semibold text-gray-600 py-2"
                      >
                        Confirm Password
                        <abbr className="text-red-500" title="required">
                          *
                        </abbr>
                      </label>
                      <input
                        placeholder="Confirm Password"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        required
                        type="password"
                        name="password2"
                        id="password2"
                        value={userFormValue?.password2}
                        onChange={(e) =>
                          setuserFormValue({
                            ...userFormValue,
                            password2: e.target.value,
                          })
                        }
                      />
                      {submitForm &&
                        !userFormValue.password2 &&
                        userFormValue.password !== userFormValue.password2 && (
                          <p className="text-red-500 text-xs">
                            Please correct this field.
                          </p>
                        )}
                    </div>
                  )} */}
                </div>

                <p className="text-xs text-red-500 text-center my-5">
                  Required fields are marked with an asterisk
                  <abbr className="text-red-500" title="Required field">
                    *
                  </abbr>
                </p>
                <div className="mt-5  md:space-x-3 md:block flex justify-center text-center items-start flex-col-reverse">
                  <Link
                    to="/users"
                    className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm txt-center shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
                  >
                    Cancel
                  </Link>
                  <button
                    onClick={() => userSubmitForm()}
                    className="mb-2 md:mb-0 bg-indigo-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-indigo-200"
                  >
                    {isSignup ? 'Sign Up' : 'Sign In'}
                  </button>
                </div>
                {!isSignup && (
                  <h2 className="text-center mb-0 my-3 text-sm text-indigo-400">
                    OR
                  </h2>
                )}
                {!isSignup && (
                  <div className="flex items-center justify-center px-7 py-0 mt-4 my-4  ">
                    <GoogleLogin
                      clientId="148329150931-mk29ttpchcttfspvv66amj3ldhisvqiu.apps.googleusercontent.com"
                      render={(renderProps) => (
                        <button
                          className=" py-2 px-4 rounded-full inline-flex items-center bg-indigo-400 text-sm text-white  hover:shadow-lg hover:bg-indigo-600"
                          onClick={renderProps.onClick}
                          disabled={renderProps.disabled}
                        >
                          <svg
                            className="w-4 h-4 mr-2"
                            style={{ width: '15px', height: '15px' }}
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"
                            />
                          </svg>
                          <span>Login with google</span>
                        </button>
                      )}
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={'single_host_origin'}
                    />
                  </div>
                )}
                <div className="flex  justify-center items-center text-sm  text-center">
                  <button onClick={handleIsSignup}>
                    {isSignup ? (
                      <p>
                        Already have an account?{' '}
                        <span className="text-indigo-400">Sign In</span>
                      </p>
                    ) : (
                      <p>
                        Don't have an account?{' '}
                        <span className="text-indigo-400">Sign Up</span>
                      </p>
                    )}
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

export default Login
