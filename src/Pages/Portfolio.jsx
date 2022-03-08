import React, { useEffect } from "react";
import {GlobalStyle} from '../Styles/GlobalStyles';
import '../App.css';

import NavBar from '../components/navBar/index';
import ContactGrid from '../components/contactIcons/contactIconsGrid';
import Portfolioinfogrid from '../components/portfolioInfogrid/portfolioinfogrid';
import {ProjectsGrid, RewardsGrid} from '../components/portfolioInfogrid/projects';
import Footer from '../components/footer/footer';
	
function Portfolio() {

  return (
		<>
			<NavBar/>
			
			<Portfolioinfogrid/>
			<ProjectsGrid/>
			<RewardsGrid />
			<ContactGrid/>
			<Footer />
			
		</>
    );
}

export default Portfolio;