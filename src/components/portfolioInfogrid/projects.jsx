import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

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


//---import texts
import {RewardsTitleStar, RewardsSubtitleStar, RewardsTitleCube, RewardsSubtitleCube, RewardsTitleHeart, RewardsSubtitleHeart} from '../../texts/InfoPortfolio.jsx';

export function ProjectsGrid() {
  return (
		<>
			
				<Container fluid >
				  <Row className="mt-3">
				    <Col lg={4}><img src={Tumb1} className="TumbProjects" alt='...'/></Col>
				    <Col lg={4}><img src={Tumb2} className="TumbProjects" alt='...'/></Col>
				    <Col lg={4}><img src={Tumb3} className="TumbProjects" alt='...'/></Col>
				  </Row>
					<Row className="mt-3">
				    <Col lg={4}><img src={Tumb4} className="TumbProjects" alt='...'/></Col>
				    <Col lg={4}><img src={Tumb5} className="TumbProjects" alt='...'/></Col>
				    <Col lg={4}><img src={Tumb6} className="TumbProjects" alt='...'/></Col>
				  </Row>
					<Row className="mt-3">
				    <Col lg={4}><img src={Tumb7} className="TumbProjects" alt='...'/></Col>
				    <Col lg={4}><img src={Tumb8} className="TumbProjects" alt='...'/></Col>
				    <Col lg={4}><img src={Tumb9} className="TumbProjects" alt='...'/></Col>
				  </Row>
					
				</Container>
		</>
  )
}




export function RewardsGrid() {
  return (
		<>
				  <Container className="centralized mt-5">
						  <Row className="rewards">
								<Col className="teste col-auto">
								<img src={Heart} alt='...'/>
								<RewardsTitleStar></RewardsTitleStar>
								<RewardsSubtitleStar></RewardsSubtitleStar>
								</Col>
								
								<Col sm={1}><div className="vl"></div></Col>
								
								<Col className="teste col-auto">
								<img src={Cube} alt='...'/>
								<RewardsTitleCube></RewardsTitleCube>
								<RewardsSubtitleCube></RewardsSubtitleCube>
								</Col>

								<Col sm={1}><div className="vl"></div></Col>
								
								<Col className="teste col-auto">
								<img src={Heart} alt='...'/>
								<RewardsTitleHeart></RewardsTitleHeart>
								<RewardsSubtitleHeart></RewardsSubtitleHeart>
								</Col>
							
						  </Row>

			</Container>
		</>
  )
}