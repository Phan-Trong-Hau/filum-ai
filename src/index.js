import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/style.scss";
import { UserDataProvider } from "./context/UserDataProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserDataProvider>
    <App />
  </UserDataProvider>
);
