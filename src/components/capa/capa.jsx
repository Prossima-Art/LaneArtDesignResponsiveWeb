import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import {Container, Col, Row,Stack} from 'react-bootstrap';

import IconPlay from '../../assets/svg/Play.svg'

import './capa.css';
import '../../Styles/ButtonStyle.css';
import {GlobalStyle} from '../../Styles/GlobalStyles';


import {InfoTitulo, InfoSubTitulo} from '../../texts/InfoHome';
import CarouNuka from './carousel-capa.jsx';
import { motion } from "framer-motion";



 export default function Capa() {
	
	


	 
   return (
 		<>
 			<Container fluid >
 	  <Row>
 	    <Col className="center grid" xs={{xs:6, order: 2 }} sm={{sm:6, order: 2 }} md={{md:3, order: 2 }} lg={{lg:3, order: 1 }}>
 				<InfoTitulo className="cols-auto" ></InfoTitulo>	
  				<InfoSubTitulo className="cols-auto"></InfoSubTitulo>
 					
				<Row>
 	 					<Col xs="auto">
 	 						<Button className="BtnPrimary ml-btn">Preços</Button>
 	 					</Col>						
 	 					<Col xs="auto">
 	 						<div>
 	 							<a href="#" className="row row-cols-auto">
 	 								<img className="IconPlay" src= {IconPlay} alt="Icon"/>
 	 								<motion.p initial={{x:100}} animate={{ x:0 }} transition={{duration: 1, delay: 1}} className="textIcon">Acompanhe<br></br>nossos projetos </motion.p>
 	 							</a>
 	 						</div>
 	 					</Col>
 	 				</Row>
				
 			</Col>
 			<Col xs={{xs:6, order: 1 }} sm={{sm:6, order: 1 }}  md={{md:3, order: 1 }} lg={{lg:3, order: 2 }}>
					<CarouNuka></CarouNuka>
			</Col>
 	  </Row>	
 	</Container>
 	</>		
   );
 }

