import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import CarouselCel from './carouselcelular/carouselCelular.jsx';
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
				<h1 className="textbold">{t('carousel.title1')}<span id= "textdecoration"> {t('carousel.title1-2')}</span>{t('samllText')}</h1>
				<p className="p-subtitle">{t('carousel.subtitle1')}</p>
					  <Row>
						  <Col xs={5} md={4} lg={2}><button className="BtnPrimary ml-btn">{t('btn.btn_Orcamento')}</button>
              </Col>
						  <Col xs={5} md={4} lg={1} ><button className="BtnSecundary">{t('btn.btn_seemore')}</button>
              </Col>
  					</Row>
					</Col>
          
			  </Row>
      </Container>
		</>
  );
}



