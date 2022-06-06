import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { useContext } from 'react'
import { AuthContext } from '../context/auth.context'
import { StyleContext } from '../context/style.context';

function Navbar() {
  const { darkMode, handleToggle, bgStyle, textStyle, navBarStyle } = useContext(StyleContext)
  const { isLoggedIn, user, authenticateUser } = useContext(AuthContext)

  const toggleStyles = (navInfo) => {
    return navInfo.isActive === true ? activeStyles : inActiveStyles;
  };

  const activeStyles = {
    textDecoration: "underline",
  };

  const inActiveStyles = {
    textDecoration: "none",
  };
  const handleLogout = () => {
    localStorage.removeItem("authToken")
    authenticateUser()
  }
  console.log('loggedIn: ', isLoggedIn)

  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${navBarStyle} ${bgStyle}`}>
        <a className="navbar-brand" href="/">Logo</a>
        <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navb" aria-expanded="false">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse" id="navb" style={{}}>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className={`nav-link ${textStyle}`} href="/">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/">Disabled</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbardrop" data-toggle="dropdown">
                Subscriptions
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/">Link 1</a>
                <a className="dropdown-item" href="/">Link 2</a>
                <a className="dropdown-item" href="/">Link 3</a>
              </div>
            </li>
            <li className="nav-item ml-md-auto"><button className="btn btn-primary switch" onClick={handleToggle}>Switch Light/Dark</button></li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
            <button className="btn btn-success my-2 my-sm-0" type="button">Search</button>
          </form>
          {isLoggedIn ? (<button className="btn btn-success my-2 my-sm-0" type="button">Logout</button>) : (<button className="btn btn-success my-2 my-sm-0" type="button"><Link to='/login'>Login</Link></button>)}
          {/* https://www.cssscript.com/dark-mode-switcher-bootstrap-5/ */}
        </div>
        
      </nav>

      
      { user !== null && <p>Bienvenido: {user.username}</p>}

      { isLoggedIn === true ? (
        <nav>
        <NavLink to="/" style={toggleStyles}> Home </NavLink>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </nav>
      ) : (
        <nav>
          <NavLink to="/" style={toggleStyles}> Home </NavLink>
          <NavLink to='/signup' style={toggleStyles}>Registro</NavLink>
          <NavLink to='/login' style={toggleStyles}>Login</NavLink>
          <NavLink to='/profile' style={toggleStyles}>News</NavLink>
        </nav>      
      )}
      

      
    </div>
  );
}

export default Navbar;
