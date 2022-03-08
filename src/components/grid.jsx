import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import {Container,Row,Col} from 'react-bootstrap';

import Pig from '../assets/svg-pay/porco.svg';
import Btc from '../assets/svg-pay/btc.svg';
import Car from '../assets/svg-pay/car.svg';
import Card from '../assets/svg-pay/card.svg';

import {Infotext1, Entrega, DescontoCripto, Parcelamento, Desconto} from '../texts/InfoHome'
import '../App.css'


export default function Grid() {
  return (
		<>
		<Container fluid className=" mt-5">
			  <Row>				
			    <Col sm={12}><Infotext1></Infotext1> </Col>
					
					<Row className="mt-5">
						<Col className="cards">
							<img className="imgcard" src= {Car} alt="car"/>  
						<Entrega/>	
					</Col>

					<Col className="cards">
							<img className="imgcard" src= {Btc} alt="btc"/>                  
						<DescontoCripto/>
					</Col>
						
					<Col className="cards">
							<img className="imgcard" src= {Pig} alt="pig"/>                  
						<Parcelamento/>
					</Col>
						
					<Col className="cards">
							<img className="imgcard" src= {Card} alt="card"/>                  
							<Desconto/>
					</Col>
					</Row>
					
			  </Row>
	</Container>
		</>
		)
}

// https://lottiefiles.com/blog/working-with-lottie/how-to-use-lottie-in-react-app
