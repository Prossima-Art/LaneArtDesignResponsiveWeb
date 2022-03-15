import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useTranslation } from 'react-i18next';
import {Container,Row,Col} from 'react-bootstrap';
import './portfolio.css'


//--image import
import Tumb1 from './imgPortfolio/tumb1.png';
import Tumb2 from './imgPortfolio/tumb2.png';
import Tumb3 from './imgPortfolio/tumb3.png';
import Tumb4 from './imgPortfolio/tumb4.png';
import Tumb5 from './imgPortfolio/tumb5.png';
import Tumb6 from './imgPortfolio/tumb6.png';
import Tumb7 from './imgPortfolio/tumb7.png';
import Tumb8 from './imgPortfolio/tumb8.png';
import Tumb9 from './imgPortfolio/tumb9.png';

//--icons import
import Star from './imgPortfolio/star2-icon.svg';
import Heart from './imgPortfolio/heart-icon.svg';
import Cube from './imgPortfolio/cubes-icon.svg';




export function ProjectsGrid() {
  return (
		<>
			
				<Container fluid >
				  <Row className="mt-3">
				    <Col xs={12} lg={4}><img src={Tumb1} className="TumbProjects mb-2" alt='...'/></Col>
				    <Col xs={12} lg={4}><img src={Tumb2} className="TumbProjects mb-2" alt='...'/></Col>
				    <Col xs={12} lg={4}><img src={Tumb3} className="TumbProjects mb-2" alt='...'/></Col>
				  </Row>
					<Row className="mt-3">
				    <Col xs={12} lg={4}><img src={Tumb4} className="TumbProjects mb-2" alt='...'/></Col>
				    <Col xs={12} lg={4}><img src={Tumb5} className="TumbProjects mb-2" alt='...'/></Col>
				    <Col xs={12} lg={4}><img src={Tumb6} className="TumbProjects mb-2" alt='...'/></Col>
				  </Row>
					<Row className="mt-3">
				    <Col xs={12} lg={4}><img src={Tumb7} className="TumbProjects mb-2" alt='...'/></Col>
				    <Col xs={12} lg={4}><img src={Tumb8} className="TumbProjects mb-2" alt='...'/></Col>
				    <Col xs={12} lg={4}><img src={Tumb9} className="TumbProjects mb-2" alt='...'/></Col>
				  </Row>
					
				</Container>
		</>
  )
}




export function RewardsGrid() {
	const {t}= useTranslation();

  return (
		<>
				  <Container className="centralized mt-5">
						  <Row className="rewards">
								<Col className="alingleft col-auto mt-3">
								<img src={Star} alt='...'/>
								<h1 className="textbold mt-2">{t('Rewards.title')}</h1>
								<h1 className="p-subtitle mb-3">{t('Rewards.subtitle')}</h1>
								</Col>
								
								<Col sm={1}><div className="vl"></div></Col>
								
								<Col className="alingleft col-auto mt-3">
								<img src={Cube} alt='...'/>
								<h1 className="textbold mt-2">{t('Rewards.title2')}</h1>
								<h1 className="p-subtitle mb-3">{t('Rewards.subtitle2')}</h1>
								</Col>

								<Col sm={1}><div className="vl"></div></Col>
								
								<Col className="alingleft col-auto mt-3">
								<img src={Heart} alt='...'/>
								<Col>
								<h1 className="textbold mt-2">{t('Rewards.title3')}</h1>
								<h1 className="p-subtitle mb-3">{t('Rewards.subtitle3')}</h1>
								</Col>
								
								</Col>
							
						  </Row>

			</Container>
		</>
  )
}