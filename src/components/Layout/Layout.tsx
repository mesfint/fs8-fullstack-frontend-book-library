import React, { useState } from 'react'

const Layout: React.FC = ({ children }) => {
  const [burgerMenu, setBurgerMenu] = useState(false)

  return (
    <>
      {/* This is an example component */}
      <div>
        <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
          <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start">
                <button
                  id="toggleSidebarMobile"
                  onClick={() => setBurgerMenu(!burgerMenu)}
                  aria-expanded="true"
                  aria-controls="sidebar"
                  className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
                >
                  <svg
                    id="toggleSidebarMobileHamburger"
                    className={`w-6 h-6 ${burgerMenu && 'hidden'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    id="toggleSidebarMobileClose"
                    className={`w-6 h-6 ${!burgerMenu && 'hidden'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <a
                  href="https://demo.themesberg.com/windster/"
                  className="text-xl font-bold flex items-center lg:ml-2.5"
                >
                  <img
                    src="https://demo.themesberg.com/windster/images/logo.svg"
                    className="h-6 mr-2"
                    alt="Windster Logo"
                  />
                  <span className="self-center whitespace-nowrap">
                    Windster
                  </span>
                </a>
              </div>
              <div className="flex items-center">
                <button
                  id="toggleSidebarMobileSearch"
                  type="button"
                  className="lg:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg"
                >
                  <span className="sr-only">Search</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <a
                  href="https://demo.themesberg.com/windster/pricing/"
                  className="hidden sm:inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3"
                >
                  <svg
                    className="svg-inline--fa fa-gem -ml-1 mr-2 h-4 w-4"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="gem"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"
                    />
                  </svg>
                  Upgrade to Pro
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="flex overflow-hidden bg-white pt-16">
          <aside
            id="sidebar"
            className={`fixed ${
              !burgerMenu && 'hidden'
            } z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75`}
            aria-label="Sidebar"
          >
            <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
              <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div className="flex-1 px-3 bg-white divide-y space-y-1">
                  <ul className="space-y-2 pb-2">
                    <li>
                      <a
                        href="https://demo.themesberg.com/windster/"
                        className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                      >
                        <svg
                          className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                        </svg>
                        <span className="ml-3">Dashboard</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>
          <div
            className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
            id="sidebarBackdrop"
          />
          <div
            id="main-content"
            className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
          >
            <main>
              <div className="pt-6 px-4">{children}</div>
            </main>

            <p className="text-center text-sm text-gray-500 my-10">
              © 2019-2021{' '}
              <a
                href="https://themesberg.com"
                className="hover:underline"
                target="_blank"
              >
                Themesberg
              </a>
              . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
