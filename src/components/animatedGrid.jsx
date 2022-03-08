import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';

import CarouselCel from './carouselcelular/carouselCelular.jsx';
import {Carosseltitulo1} from '../texts/InfoHome';
import {CarosselSubTitulo1} from '../texts/InfoHome';
import '../Styles/ButtonStyle.css';

export const AnimatedGrid = () => {
	return (
		<> 
			<Container fluid className="mt-5">
			  <Row>
          
			    <Col sm={12} md={6} lg={6}>        
              <CarouselCel></CarouselCel>
					</Col>
					
			    <Col sm={12} md={6} lg={6}>
						<Carosseltitulo1></Carosseltitulo1>
						<CarosselSubTitulo1></CarosselSubTitulo1>
					  <Row>
						  <Col sm={2} md={4} lg={3}><button className="BtnPrimary ml-btn">Orçamento</button>
              </Col>
						  <Col sm={2} md={4} lg={3} ><button className="BtnSecundary">Ver mais</button>
              </Col>
  					</Row>
					</Col>
          
			  </Row>
      </Container>
		</>
  );
}



