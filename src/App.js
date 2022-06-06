import React, { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { StyleContext } from "./context/style.context";
//import routes from "./config/routes";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Error from "./pages/Error";
import FeedPage from "./pages/FeedPage";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
//import { StyleContext } from "../context/StyleContext"

function App() {

  const { darkMode, handleToggle, bgStyle, textStyle, navBarStyle } = useContext(StyleContext)
  console.log(darkMode)

  return (
    <div className={`App ${bgStyle}`}>
      <Navbar />
      <Routes>

        {/* {routes({}).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))} */}
        <Route path="/" element={<Home />} />
        <Route path="/feed/" element={<FeedPage/>}/>
        <Route path="/feed/:id" element={<FeedPage/>}/>

        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />

        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  );
}

export default App;
