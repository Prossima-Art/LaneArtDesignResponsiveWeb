import React from "react";
//___
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { GlobalStyle } from './Styles/GlobalStyles';

import Inicio from './Pages/Inicio.jsx';
import Preco from './Pages/Preco.jsx';
import Portfolio from './Pages/Portfolio.jsx';
import AnimatedCursor from "react-animated-cursor"




function App() {

	return (
		<>
			<GlobalStyle />
			{/* <AnimatedCursor
				innerSize={8}
				outerSize={8}
				color='213, 0, 249'
				outerAlpha={0.2}
				innerScale={0.7}
				outerScale={5}
			/> */}
			<Router>
				<Routes>
					<Route exact path="/" element={<Inicio />} />
					<Route exact path="/Preco" element={<Preco />} />
					<Route exact path="/Portfolio" element={<Portfolio />} />
					<Route exact path="*" element={<div>pagina não encontrada</div>} />
				</Routes>
			</Router>


		</>
	);
}

export default App;