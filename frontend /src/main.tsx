import { Experimental_CssVarsProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import Router from "./router";
import { theme } from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Experimental_CssVarsProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Experimental_CssVarsProvider>
  </React.StrictMode>
);
