import React, { Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";



ReactDOM.render(
  <Suspense fallback={<h1 className="centralized">Loading...</h1>}>

    <React.StrictMode>
      <App />
    </React.StrictMode>
    </Suspense>,
  document.getElementById("root")
);
