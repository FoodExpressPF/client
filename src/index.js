import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store/index";

import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <Auth0Provider
          domain="dev-v48hxvnnc5llys6d.us.auth0.com"
          clientId="fD8Ho74aY8A7yHD5kmCMeB9wIiUD7NyH"
          redirectUri={window.location.origin}
          useRefreshTokens
          cacheLocation="localstorage"
        >
          <App />
        </Auth0Provider>
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
//   redirectUri={window.location.origin} es la linea que decide a donde redireccionar al usuario una vez termine el login o logout
