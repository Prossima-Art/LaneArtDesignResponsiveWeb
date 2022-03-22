import React, { useEffect } from "react";
import {GlobalStyle} from '../Styles/GlobalStyles';
import '../App.css';
import '../Styles/ButtonStyle.css';

import NavBar from '../components/navBar/index';

import Grid from '../components/grid.jsx';
import {AnimatedGrid} from '../components/animatedGrid';
import {AnimatedGrid2} from '../components/animatedGrid2';
import {Contactsection} from '../components/contactsection';

// import {SNcards} from '../components/SNcards/SNcards';
import Footer from '../components/footer/footer';


import Capa from '../components/capa/capa.jsx';

function Inicio() {

  return (
		<>
			<NavBar/>
			<GlobalStyle/>
			<Capa/>
			<AnimatedGrid/>
			<AnimatedGrid2/>
	    	<Grid/>    
			<Contactsection/>
			{/* <SNcards /> */}
			<Footer />
  
		</>
    );
}

export default Inicio;