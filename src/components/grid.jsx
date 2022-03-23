import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import {Container,Row,Col} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import Pig from '../assets/svg-pay/porco.svg';
import Btc from '../assets/svg-pay/btc.svg';
import Car from '../assets/svg-pay/car.svg';
import Card from '../assets/svg-pay/card.svg';
import '../App.css'


export default function Grid() {
	const {t}= useTranslation();
	
  return (
		<>
		<Container fluid className=" mt-5">
			  <Row>				
			    <Col sm={12}>
				<h1 className="textbold">{t('payments.h1')}<span id= "textdecoration"> {t('payments.h1-2')}</span>{t('payments.h1-3')}<br></br>{t('payments.h1-4')}<br></br>{t('payments.h1-5')}</h1> 
				</Col>
					
					<Row className="mt-5">
						<Col className="cards">
							<img className="imgcard" src= {Car} alt="car"/>  
							<p className="p-title centralized">{t('payments.title1')}</p>
							<p className="p-subtitle centralized ">{t('payments.subtitle1')}</p>
					</Col>

					<Col className="cards">
							<img className="imgcard" src= {Btc} alt="btc"/>                  
							<p className="p-title centralized">{t('payments.title2')}</p>
							<p className="p-subtitle centralized ">{t('payments.subtitle2')}</p>
					</Col>
						
					<Col className="cards">
							<img className="imgcard" src= {Pig} alt="pig"/>                  
							<p className="p-title centralized">{t('payments.title3')}</p>
							<p className="p-subtitle centralized ">{t('payments.subtitle3')}</p>
					</Col>
						
					<Col className="cards">
							<img className="imgcard" src= {Card} alt="card"/>                  
							<p className="p-title centralized">{t('payments.title4')}</p>
							<p className="p-subtitle centralized ">{t('payments.subtitle4')}</p>
					</Col>
					</Row>
					
			  </Row>
	</Container>
		</>
		)
}

// https://lottiefiles.com/blog/working-with-lottie/how-to-use-lottie-in-react-app
