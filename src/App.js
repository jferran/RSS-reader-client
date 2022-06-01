import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import routes from "./config/routes";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Error from "./pages/Error";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>

        {/* {routes({}).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))} */}
        <Route path="/" element={<Home />} />

        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />

        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  );
}

export default App;
