import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { UserStorage } from '../models/User'

const useLogged = () => {
  const tokenName = 'userProfile'
  const location = useLocation()
  const history = useNavigate()

  const [user, setUser] = useState<UserStorage | undefined>(undefined)
  useEffect(() => {
    if (localStorage.getItem(tokenName)?.length) {
      setUser(JSON.parse(localStorage.getItem(tokenName) as string))
    }
  }, [location])

  const logout = () => {
    localStorage.removeItem(tokenName)
    setUser(undefined)
    history('/')
  }
  const isLogged = () => !(typeof user === 'undefined')
  const loggedPage = () => {
    if (!isLogged()) {
      history('/users/auth')
    }
  }
  const adminPage = () => {
    if (!isLogged() || !user?.user?.isAdmin) {
      history('/')
    }
  }
  return { user, logout, loggedPage, isLogged, adminPage }
}

export default useLogged
