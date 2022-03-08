import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import {Container,Row,Col} from 'react-bootstrap';
import './pricegrid.css'

import {PacoteDesign, PacoteDev, PacoteExpert} from '../../texts/InfoPreco.jsx';


export default function Gridprice() {
  return (
		<>
		<Container className=" mt-5">
			  <Row>				
			    
					
					<Row className="mt-5">
						<Col className="cards">
						<PacoteDesign/>
						
					</Col>

					<Col className="cards">              
						<PacoteDev/>
					</Col>
						
					<Col className="cards">                  
						<PacoteExpert/>
					</Col>
					</Row>
					
			  </Row>
	</Container>
		</>
		)
}