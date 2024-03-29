import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store";
import dotenv from "dotenv";
import axios from "axios";
import { LangProvider } from "./context/langContext";
dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <LangProvider>
        <Auth0Provider
          useRefreshTokens={true}
          cacheLocation="localstorage"
          domain="dev-ldy8yn3a.us.auth0.com"
          clientId="UeNorZxq5mET0n5RaFSKS4E6Y6SCm2i6"
          redirectUri={"https://gimmearide.vercel.app/home"}
        >
          <App />
        </Auth0Provider>
      </LangProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
