import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useTranslation } from 'react-i18next';
import {Container, Row, Col} from 'react-bootstrap';
import './SNcards.css'


//--image import
// import Image1 from './imgSN/avaliate.png';
import {Tweet1, Tweet2, Tweet3, Tweet4} from '../twitter/twitter';



export function SNcards() {
	const {t}= useTranslation();

  return (
		<>
			
				<Container fluid className="principal mt-5 mb-5">
					<Row className="mb-5 centralized">
						<Col md="auto">
						<h1 className="textBold mt-5 " > {t('avaliations.title')} <span id= "textDecoration"> {t('avaliations.title1-2')} </span> {t('avaliations.title1-3')}</h1>
						</Col>
					</Row>
				  <Row className="teste mt-3 animationX">
				    <Col xs={3} sm={3} ><Tweet1/></Col>
				    <Col xs={3} sm={3} ><Tweet2/></Col>
				    <Col xs={3} sm={3} ><Tweet3/></Col>
					<Col xs={3} sm={3} ><Tweet4/></Col>
				  </Row>	
					<Row className="teste mt-3 animation-X">
				    <Col xs={3} sm={3} ><Tweet1/></Col>
				    <Col xs={3} sm={3} ><Tweet2/></Col>
				    <Col xs={3} sm={3} ><Tweet3/></Col>
					<Col xs={3} sm={3} ><Tweet4/></Col>
				  </Row>
				</Container>
		</>
  )
}

