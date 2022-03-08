import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import {Container,Row,Col} from 'react-bootstrap';

import Instagram from '../contactIcons/iconsSvg/instagram-icon.svg';
import Linkedin from '../contactIcons/iconsSvg/linkedin-icon.svg';
import WhatsApp from '../contactIcons/iconsSvg/whats-icon.svg';
import Email from '../contactIcons/iconsSvg/email-icon.svg';


import {Logo} from '../../texts/logoHeader.jsx';
///Import text



export default function Footer() {
  return (
		<>

			<Container fluid className="mt-5 mb-5">
				  <Row>
						<Col sm={4}><Logo/></Col>
						<Col sm={4}> 
							<Link className="ml-2" to="/">Inicio </Link>
							<Link className="ml-2" to="/Preco">Preço </Link>
							<Link className="ml-2" to="/Portfolio">Portfolio</Link>
						</Col>
						<Col sm={4}>
								<a href="https://www.instagram.com/laneartdesign/?hl=en"><img className="imgcontact m-2" src= {Instagram} alt="Instagram Account"/></a>
								<a href="https://www.linkedin.com/company/lane-art-design/?viewAsMember=true"><img className="imgcontact m-2" src= {Linkedin} alt="Linkedin Account"/></a>

							<a href="https://wa.me/qr/UDY4VLUBEXE7C1"><img className="imgcontact m-2" src= {WhatsApp} alt="WhatsApp Number"/></a>
								
								<a href="mailto: laneartdigital@gmail.com"><img className="imgcontact m-2" src= {Email} alt="Instagram Adress"/></a>
								
							</Col>
						
						<Row className="p-subtitle mt-5">
							<Col sm={6}> © Todos os direitos reservados, 2022.</Col>
				  	</Row>
					</Row>

			</Container>
		</>
  )
}