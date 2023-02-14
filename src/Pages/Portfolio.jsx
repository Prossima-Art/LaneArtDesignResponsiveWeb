import React, { useEffect } from "react";
import {GlobalStyle} from '../Styles/GlobalStyles';
import '../App.css';

import NavBar from '../components/navBar/index';
// import ContactGrid from '../components/contactIcons/contactIconsGrid';
import {Contactsection} from '../components/contactsection';
import Portfolioinfogrid from '../components/portfolioInfogrid/portfolioinfogrid';
import {ProjectsGrid, RewardsGrid} from '../components/portfolioInfogrid/projects';
import Footer from '../components/footer/footer';
import ScrollToTop from "../components/scrollToTop/scrollToTop";
	
function Portfolio() {

  return (
		<>
			<NavBar/>
			
			<Portfolioinfogrid/>
			<ProjectsGrid/>
			<RewardsGrid />
			{/* <ContactGrid/> */}
			<Contactsection />
			<ScrollToTop/>
			<Footer />
			
		</>
    );
}

export default Portfolio;