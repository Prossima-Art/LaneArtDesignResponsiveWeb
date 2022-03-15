import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useTranslation } from 'react-i18next';
import {Container, Row, Col} from 'react-bootstrap';
import './SNcards.css'


//--image import
import Image1 from './imgSN/avaliate.png';



export function SNcards() {
	const {t}= useTranslation();

  return (
		<>
			
				<Container fluid className="principal mt-5 mb-5">
					<Row className="mb-5 centralized">
						<Col md="auto">
						<h1 className="textbold mt-5 " > {t('avaliations.title')} <span id= "textdecoration"> {t('avaliations.title1-2')} </span> {t('avaliations.title1-3')}</h1>
						</Col>
					</Row>
				  <Row className="teste mt-3 animationX">
				    <Col xs={3} sm={3} ><img src={Image1} className="cardeffect" alt='...'/></Col>
				    <Col xs={3} sm={3} ><img src={Image1} className="cardeffect" alt='...'/></Col>
				    <Col xs={3} sm={3} ><img src={Image1} className="cardeffect" alt='...'/></Col>
					<Col xs={3} sm={3} ><img src={Image1} className="cardeffect" alt='...'/></Col>
				  </Row>	
					<Row className="teste mt-3 animation-X">
				    <Col xs={3} sm={3} ><img src={Image1} className="cardeffect" alt='...'/></Col>
				    <Col xs={3} sm={3} ><img src={Image1} className="cardeffect" alt='...'/></Col>
				    <Col xs={3} sm={3} ><img src={Image1} className="cardeffect" alt='...'/></Col>
					<Col xs={3} sm={3} ><img src={Image1} className="cardeffect" alt='...'/></Col>
				  </Row>
				</Container>
		</>
  )
}

