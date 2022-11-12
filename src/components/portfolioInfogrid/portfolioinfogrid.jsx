import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useTranslation } from 'react-i18next';
import {Container,Row,Col} from 'react-bootstrap';
import {BannerSvg} from './bannersvg.jsx'
import './portfolio.css'



export default function Portfolioinfogrid() {

	const {t}= useTranslation();
  return (
		<>
				  <Container fluid className="mr-0 mt-5">
						  <Row className="mr-0">
								<Col className="mr-0" sm={12} md={6} >
								<h1 className="h1-md mt-5"> {t('portfolio.title')} <span id= "textdecoration">{t('portfolio.title1-2')}</span></h1>
								<p className="p-subtitle textbox ">{t('portfolio.subtitle')}</p>
								</Col>
								<Col className="banner mr-0" sm={12} md={6}><BannerSvg ></BannerSvg></Col>
						  </Row>

			</Container>
		</>
  )
}