import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthWrapper } from "./context/auth.context";
import { StyleWrapper } from "./context/style.context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StyleWrapper>
        <AuthWrapper>
          <App />
        </AuthWrapper>
      </StyleWrapper>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
