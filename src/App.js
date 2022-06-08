import React, { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { StyleContext } from "./context/style.context";
import AddFeed from "./pages/AddFeed";
import Account from "./pages/auth/Account";
//import routes from "./config/routes";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Error from "./pages/Error";
import FeedPage from "./pages/FeedPage";
import Home from "./pages/Home";
import ManageFeeds from "./pages/ManageFeeds";
import NotFound from "./pages/NotFound";
//import { StyleContext } from "../context/StyleContext"

function App() {

  const { darkMode, handleToggle, bgStyle, textStyle, navBarStyle } = useContext(StyleContext)
  
  console.log(darkMode)

  return (
    <div className={`App vh-100 ${bgStyle}`}>
      <Navbar />
      <div className="container">
      <Routes>
        {/* {routes({}).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))} */}
        <Route path="/" element={<Home />} />
        <Route path="/feed/" element={<FeedPage/>}/>
        <Route path="/feed/:id" element={<FeedPage/>}/>
        <Route path="/favouriteNews/" element={<FeedPage/>}/>

        <Route path="/addFeed/" element={<AddFeed/>}/>
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
