import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';

import CarouselCel from './carouselcelular/carouselCelular.jsx';
import {Carosseltitulo1} from '../texts/InfoHome';
import {CarosselSubTitulo1} from '../texts/InfoHome';
import '../Styles/ButtonStyle.css';

import { useTranslation } from 'react-i18next';

export const AnimatedGrid = () => {
	const {t}= useTranslation();

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
						  <Col xs={2} md={4} lg={1}><button className="BtnPrimary ml-btn">{t('btn.btn_Orcamento')}</button>
              </Col>
						  <Col xs={2} md={4} lg={1} ><button className="BtnSecundary">{t('btn.btn_seemore')}</button>
              </Col>
  					</Row>
					</Col>
          
			  </Row>
      </Container>
		</>
  );
}



