import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import {Container, Row, Col} from 'react-bootstrap';
import './SNcards.css'


//--image import
import Image1 from './imgSN/avaliate.png';



export function SNcards() {
  return (
		<>
			
				<Container fluid className="principal mt-5 mb-5">
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

