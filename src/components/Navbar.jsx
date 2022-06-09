import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { useContext } from 'react'
import { AuthContext } from '../context/auth.context'
import { StyleContext } from '../context/style.context';
import { SubscriptionsContext } from '../context/subscriptions.context';

function Navbar() {
  const { darkMode, handleToggle, bgStyle, textStyle, navBarStyle } = useContext(StyleContext)
  const { isLoggedIn, user, authenticateUser } = useContext(AuthContext)
  const { mySubscriptions } = useContext(SubscriptionsContext)
  
  const handleLogout = () => {
    localStorage.removeItem("authToken")
    authenticateUser()
  }

  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${navBarStyle} ${bgStyle}`}>
        <NavLink to={`/`} className={`navbar-brand ${textStyle}`}><img src='/RSS-icon.svg' height='25px' alt=''/>RSS-Reader</NavLink>
        <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navb" aria-expanded="false">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse" id="navb" style={{}}>
          <ul className="navbar-nav mr-auto">
            
            {isLoggedIn && 
            <>
            <li className="nav-item">
              <NavLink to={`/feed/`} className={`dropdown-item ${textStyle}`}>My news</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/feed/favourites`} className={`dropdown-item ${textStyle}`}>Favorite news</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className={`nav-link dropdown-toggle`} to="/feed" id="navbardrop" data-toggle="dropdown">
                Subscriptions
              </NavLink>
              <div className={`dropdown-menu`}>
                {/* {myFeeds !== null && myFeeds.map((element) => <NavLink to={`/feed/${element._id}`} key={element._id} className={`dropdown-item ${textStyle}`}><img style={{height: '16px'}} src={`https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${element.feed.sourceUrl}&size=128`} alt=''/>{element.feed.name}</NavLink>)} */}
                {mySubscriptions !== null && mySubscriptions.map((element) => <NavLink to={`/feed/${element._id}`} key={element._id} className={`dropdown-item`}><img style={{height: '16px'}} src={`https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${element.feed.sourceUrl}&size=128`} alt=''/>{element.feed.name}</NavLink>)}
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className={`nav-link dropdown-toggle ${textStyle}`} href="/" id="navbardrop" data-toggle="dropdown">
                Subscriptions
              </a>
              <div className={`dropdown-menu ${bgStyle}`}>
                {/* {myFeeds !== null && myFeeds.map((element) => <NavLink to={`/feed/${element._id}`} key={element._id} className={`dropdown-item ${textStyle}`}><img style={{height: '16px'}} src={`https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${element.feed.sourceUrl}&size=128`} alt=''/>{element.feed.name}</NavLink>)} */}
                {mySubscriptions !== null && mySubscriptions.map((element) => <NavLink to={`/feed/${element._id}`} key={element._id} className={`dropdown-item ${textStyle}`}><img style={{height: '16px'}} src={`https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${element.feed.sourceUrl}&size=128`} alt=''/>{element.feed.name}</NavLink>)}
              </div>
            </li>
            <li className="nav-item">
              <NavLink to={`/manage`} className={`nav-link ${textStyle}`}>Manage Subscriptions</NavLink>
            </li>
            </>
          }
            <li className="nav-item ml-md-auto"><button className="btn btn-primary switch" onClick={handleToggle}>Switch Light/Dark</button></li>
          </ul>
          
          {isLoggedIn ? (<><button className="btn btn-success my-2 my-sm-0" type="button"><NavLink to={`/account`} className={`${textStyle}`}>My Account</NavLink></button><button className="btn btn-danger my-2 my-sm-0" type="button" onClick={handleLogout}>Logout</button></>) : (<button className="btn btn-success my-2 my-sm-0" type="button"><Link to='/login'>Login</Link></button>)}
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
