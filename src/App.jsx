import React from "react";
//___
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {GlobalStyle} from './Styles/GlobalStyles';

import Inicio from './Pages/Inicio.jsx';
import Preco from './Pages/Preco.jsx';
import Portfolio from './Pages/Portfolio.jsx';




function App() {

  return (
		<>
		<GlobalStyle/>
		
		<Router>
			<Routes>
        <Route exact path="/" element={<Inicio/>} />
				<Route exact path="/Preco" element={<Preco/>} />
				<Route exact path="/Portfolio" element={<Portfolio/>} />
			</Routes>  
		</Router>


			</>
    );
}

export default App;