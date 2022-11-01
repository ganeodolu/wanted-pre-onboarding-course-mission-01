import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import IssuesProvider from "./lib/states/IssuesProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <IssuesProvider>
      <App />
    </IssuesProvider>
  </BrowserRouter>
);

reportWebVitals();
