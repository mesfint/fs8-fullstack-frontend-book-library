import { FunctionComponent, useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import Svg from '../svg/Svg'
import { routerList } from '../../Routes'
import { IconType } from '../svg/icons'
import { useLocation } from 'react-router'
import LoginForm from '../../pages/Auth/LoginForm'
import useLogged from '../../utils/useLogged'

const Layout: FunctionComponent = ({ children }) => {
  const [mobileBurger, setMobileBurger] = useState(false)
  const { user, logout } = useLogged()
  console.log('user====>', user)

  const location = useLocation()
  return (
    <>
      <div>
        <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
          <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start">
                <button
                  id="toggleSidebarMobile"
                  aria-expanded="true"
                  aria-controls="sidebar"
                  className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
                  onClick={() => setMobileBurger(!mobileBurger)}
                >
                  <Svg
                    type="burger"
                    id="toggleSidebarMobileHamburger"
                    className={`w-6 h-6 ${mobileBurger && 'hidden'}`}
                  />
                  <Svg
                    type="close"
                    id="toggleSidebarMobileClose"
                    className={`w-6 h-6 ${!mobileBurger && 'hidden'}`}
                  />
                </button>
                <Link
                  to="/"
                  className="text-xl font-bold flex items-center lg:ml-2.5"
                >
                  <Svg type="logo" className="h-8 mr-2" alt="Library Logo" />
                  <span className="self-center whitespace-nowrap">Library</span>
                </Link>
              </div>
              <div className="flex  ">
                <Link to="/book/ListBorrowedBooks" className="items-end">
                  My Cart {'(0 books)'}{' '}
                </Link>
              </div>
              <div className="flex gap-2 justify-center align-center font-mono">
                {user?.user?.firstName ? (
                  <>
                    <span>{user?.user.firstName}</span>
                    <button
                      className="bg-red-500 text-white active:bg-red-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      onClick={() => logout()}
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link to="users/auth">Login</Link>
                )}
              </div>
            </div>
          </div>
        </nav>
        <div className="flex overflow-hidden bg-white pt-16">
          {user?.token && (
            <aside
              id="sidebar"
              className={`fixed z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75 ${
                !mobileBurger && 'hidden'
              }`}
              aria-label="Sidebar"
            >
              <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
                <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                  <div className="flex-1 px-3 bg-white divide-y space-y-1">
                    <ul className="space-y-2 pb-2">
                      {routerList.map(
                        (route, index) =>
                          route.icon && (
                            <li key={index}>
                              <Link
                                to={route.path}
                                className={`text-base rounded-lg flex items-center p-2 hover:bg-gray-100 group ${
                                  location.pathname === route.path
                                    ? 'text-gray-500 font-bold underline'
                                    : 'text-gray-900 font-normal'
                                }`}
                              >
                                <Svg
                                  type={route.icon as IconType}
                                  className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"
                                />
                                <span className="ml-3">{route.title}</span>
                              </Link>
                            </li>
                          )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </aside>
          )}
          <div
            className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
            id="sidebarBackdrop"
          />
          <div
            id="main-content"
            className={`h-full w-full bg-gray-50 relative overflow-y-auto ${
              user?.token && 'lg:ml-64'
            }`}
          >
            <main>
              <div className="pt-6 px-4">{children}</div>
            </main>
            <footer>
              <p className="text-center text-sm text-gray-500 my-10">
                © 2021{' '}
                <a href="@mesfint" className="hover:underline" target="_blank">
                  MesfinT
                </a>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
