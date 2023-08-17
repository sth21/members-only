import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router.jsx";
import GlobalStyle from "./styled-components/GlobalStyle.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <Router />
  </React.StrictMode>
);
