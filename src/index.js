import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./config/layout-color.scss";
import { Store } from "./helpers/store";
import { Provider } from "react-redux";
import Router from "./config/router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    <Router />
  </Provider>
);