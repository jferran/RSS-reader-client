import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'

function Account() {
    const { isLoggedIn, user, authenticateUser } = useContext(AuthContext)
  return (
    <div>
        Account: {user.username}
        Email: {user.email}

    </div>
  )
}

export default Account