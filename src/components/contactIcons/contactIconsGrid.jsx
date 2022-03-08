import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import {Container,Row,Col} from 'react-bootstrap';

import Instagram from './iconsSvg/instagram-icon.svg';
import Linkedin from './iconsSvg/linkedin-icon.svg';
import WhatsApp from './iconsSvg/whats-icon.svg';
import Email from './iconsSvg/email-icon.svg';

///Import text

import {TitleContactBuy, SubTitleContactBuy} from '../../texts/InfoPreco.jsx';

export default function ContactGrid() {
  return (
		<>

			<Container className="mt-5 mb-5">
				  <Row>
						<Col sm={12}><TitleContactBuy></TitleContactBuy> </Col>
						<Col sm={12}><SubTitleContactBuy></SubTitleContactBuy> </Col>
						<Row className="centralized">
					    <Col  sm={1}><a href="https://www.instagram.com/laneartdesign/?hl=en"><img className="imgcontact m-2" src= {Instagram} alt="Instagram Account"/></a></Col>
					    <Col sm={1}><a href="https://www.linkedin.com/company/lane-art-design/?viewAsMember=true"><img className="imgcontact m-2" src= {Linkedin} alt="Linkedin Account"/></a></Col>
							<Col sm={1}><a href="https://wa.me/qr/UDY4VLUBEXE7C1"><img className="imgcontact m-2" src= {WhatsApp} alt="WhatsApp Number"/></a></Col>
							<Col sm={1}><a href="mailto: laneartdigital@gmail.com"><img className="imgcontact m-2" src= {Email} alt="Instagram Adress"/></a></Col>
				  	</Row>
					</Row>

			</Container>
		</>
  )
}


								

							
								
								