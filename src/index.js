import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthWrapper } from "./context/auth.context";
import { StyleWrapper } from "./context/style.context";
import { SubscriptionsWrapper } from "./context/subscriptions.context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StyleWrapper>
        <AuthWrapper>
          <SubscriptionsWrapper>
            <App />
          </SubscriptionsWrapper>
        </AuthWrapper>
      </StyleWrapper>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
