import React, { useEffect, useState, VoidFunctionComponent } from 'react'
import { useParams } from 'react-router'
import Spinner from '../../components/Spinner'
import { User } from '../../models/User'
import { findOneUser } from '../../redux/users/users.action'
import FormUser from './/FormUser'

const EditUser: VoidFunctionComponent = () => {
  const { id } = useParams()
  const [editUser, setEditUser] = useState<User | undefined>(undefined)
  useEffect(() => {
    if (id) {
      findOneUser(id).then((user) => setEditUser(user))
    }
  }, [id])
  if (!editUser || !id) {
    return <Spinner />
  }
  return <FormUser user={editUser} />
}

export default EditUser
