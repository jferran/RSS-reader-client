import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'
import { StyleContext } from '../../context/style.context'

function Account() {
    const { isLoggedIn, user, authenticateUser } = useContext(AuthContext)
    const { darkMode, handleToggle, bgStyle, textStyle, navBarStyle } = useContext(StyleContext)
  return (
    <div>
        <h1>My account</h1>

        <form>
        <div className="form-group row">
            <label htmlFor='staticName' className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input type="text" readonly className={`form-control-plaintext ${textStyle}`} id="staticName" value={user.username}/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor='staticEmail' className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="text" readonly className={`form-control-plaintext ${textStyle}`} id="staticEmail" value={user.email}/>
            </div>
          </div>
          <div class="form-group row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPassword"/>
            </div>
          </div>
          
        </form>
        <button type="submit" class="btn btn-primary">Change Password</button>

    </div>
  )
}

export default Account