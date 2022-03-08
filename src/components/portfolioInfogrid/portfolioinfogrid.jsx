import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import {Container,Row,Col} from 'react-bootstrap';
import {BannerSvg} from './bannersvg.jsx'
import './portfolio.css'



///Import text

import {InfoTituloPortifolio, InfoSubTituloPortifolio} from '../../texts/InfoPortfolio.jsx';

export default function Portfolioinfogrid() {
  return (
		<>
				  <Container className="ml-0 mt-5">
						  <Row className="ml-0">
								<Col className="ml-0" md={12} lg={6}>
								<InfoTituloPortifolio></InfoTituloPortifolio>
								<InfoSubTituloPortifolio></InfoSubTituloPortifolio> </Col>
								
								<Col className="banner mt-5 mr-0" md={12} lg={6}><BannerSvg></BannerSvg></Col>
						  </Row>

			</Container>
		</>
  )
}