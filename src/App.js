import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthContext } from "./context/auth.context";
import { StyleContext } from "./context/style.context";
import { SubscriptionsContext } from "./context/subscriptions.context";
import Account from "./pages/auth/Account";
//import routes from "./config/routes";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Error from "./pages/Error";
import FeedPage from "./pages/FeedPage";
import Home from "./pages/Home";
import ManageFeeds from "./pages/ManageFeeds";
import NotFound from "./pages/NotFound";


function App() {
  // const { darkMode, handleToggle, bgStyle, textStyle, navBarStyle } = useContext(StyleContext)
  const { darkMode, bgStyle, textStyle } = useContext(StyleContext)
  const { getSubscriptions } = useContext(SubscriptionsContext)
  const { isLoggedIn } = useContext(AuthContext)
  console.log(darkMode)

  useEffect(()=>{
    isLoggedIn && getSubscriptions()
  },[isLoggedIn])

  return (
    <div className={`App min-vh-100 ${bgStyle} ${textStyle}`}>
      <Navbar />
      <div className="container">
      <Routes className='vh-100'>
        {/* {routes({}).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))} */}
        <Route path="/" element={<Home />} />
        <Route path="/feed/" element={<FeedPage/>}/>
        <Route path="/feed/:id" element={<FeedPage/>}/>
        <Route path="/favouriteNews/" element={<FeedPage/>}/>

        <Route path="/manage/" element={<ManageFeeds/>}/>
        
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/account" element={<Account/>} />

        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      </div>
    </div>
  );
}

export default App;
