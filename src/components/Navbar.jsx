import React, { useEffect, useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import { useContext } from 'react'
import { AuthContext } from '../context/auth.context'
import { StyleContext } from '../context/style.context';
import { getMyFeedsService } from '../services/user.services';

function Navbar() {
  const { darkMode, handleToggle, bgStyle, textStyle, navBarStyle } = useContext(StyleContext)
  const { isLoggedIn, user, authenticateUser } = useContext(AuthContext)
  const [myFeeds, setMyFeeds] = useState(null)
  useEffect(()=>{
    getMyFeeds()
  },[])

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

  const getMyFeeds = async () => {
    try {
      const response = await getMyFeedsService()
      setMyFeeds(response.data)
    } catch (error) {
      
    }
  }
console.log("myFeeds: ",myFeeds)


  console.log('loggedIn: ', isLoggedIn)

  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${navBarStyle} ${bgStyle}`}>
        <NavLink to={`/`} className={`navbar-brand`}>Logo</NavLink>
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
            

            <li className="nav-item">
              <NavLink to={`/feed/favourites`} className={`dropdown-item ${textStyle}`}>Favorite news</NavLink>
            </li>

            <li className="nav-item">  
              <NavLink to={`/addFeed`} className={`dropdown-item ${textStyle}`}>Add Subscription</NavLink>
            </li>

            <li className="nav-item dropdown">
              <a className={`nav-link dropdown-toggle ${textStyle}`} href="/" id="navbardrop" data-toggle="dropdown">
                Subscriptions
              </a>
              <div className={`dropdown-menu ${bgStyle}`}>
                {myFeeds !== null && myFeeds.map((element) => <NavLink to={`/feed/${element._id}`} key={element._id} className={`dropdown-item ${textStyle}`}>{element.feed.name}</NavLink>)}
              </div>
            </li>
            <li className="nav-item">
              <NavLink to={`/manage`} className={`nav-link ${textStyle}`}>Manage Subscriptions</NavLink>
            </li>


            <li className="nav-item ml-md-auto"><button className="btn btn-primary switch" onClick={handleToggle}>Switch Light/Dark</button></li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
            <button className="btn btn-success my-2 my-sm-0" type="button">Search</button>
          </form>
          {isLoggedIn ? (<button className="btn btn-success my-2 my-sm-0" type="button" onClick={handleLogout}>Logout</button>) : (<button className="btn btn-success my-2 my-sm-0" type="button"><Link to='/login'>Login</Link></button>)}
          {/* https://www.cssscript.com/dark-mode-switcher-bootstrap-5/ */}
        </div>
        
      </nav>

      
      {/* { user !== null && <p>Bienvenido: {user.username}</p>}

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
      )} */}
      

      
    </div>
  );
}

export default Navbar;
