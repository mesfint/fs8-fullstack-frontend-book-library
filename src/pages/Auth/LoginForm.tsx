import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="flex  bg-gray-100  grid-cols-1 divide-x divide divide-indigo-300  ">
      <div className="px-24 py-6 mt-4 text-left bg-white shadow-lg ">
        <h3 className="text-xl font- text-center mt-2 ">
          Login with google account
        </h3>

        <div className="mt-4">
          <div className="mt-8"></div>
          <div className="flex items-center justify-center   ">
            <button className="  px-6 py-2 mt-24 text-white bg-red-400 rounded-lg hover:bg-blue-900">
              Google
            </button>
          </div>
        </div>
      </div>
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-xl font- text-center mt-0 ">
          Login to your account
        </h3>
        <form>
          <div className="mt-8">
            <div>
              <label className="block" htmlFor="email">
                Email
                <label>
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </label>
              </label>
            </div>
            <div className="mt-2">
              <label className="block">
                Password
                <label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </label>
              </label>
            </div>
            <div className="flex items-baseline justify-between">
              <button className="px-6 py-2 mt-4 text-white bg-indigo-400 rounded-lg hover:bg-blue-900">
                Login
              </button>

              <Link
                to="/users"
                className="text-sm text-indigo-400 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
