import React, { useEffect } from "react";
import {GlobalStyle} from '../Styles/GlobalStyles';
import '../App.css';

import NavBar from '../components/navBar/index';

//___import text

import ContactGrid from '../components/contactIcons/contactIconsGrid';
import Grid from '../components/grid.jsx';
import {Gridprice, InfoTituloBuy } from '../components/pricegrid/pricegrid';
import Footer from '../components/footer/footer';


function Preco() {

  return (
		<>
			<NavBar/>
			<InfoTituloBuy/>
			<Gridprice/>
			<Grid/>
			<ContactGrid/>
			<Footer />
			
  
		</>
    );
}

export default Preco;