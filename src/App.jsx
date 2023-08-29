import React from "react";
//___
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import { GlobalStyle } from "./Styles/GlobalStyles";

import Inicio from "./Pages/Inicio.jsx";
// import Preco from "./Pages/Preco.jsx";
import Portfolio from "./Pages/Portfolio.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";



function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          {/* <Route path="/preco" element={<Preco />} /> */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
