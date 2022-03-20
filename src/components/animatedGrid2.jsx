import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Tambs from './carouselportfolio/carouselportfolio'
import '../Styles/ButtonStyle.css';
import { useTranslation } from 'react-i18next';

export const AnimatedGrid2 = () => {
	const { t } = useTranslation();

	return (
		<>

			<Container fluid className="mt-5">
				<Row>
					<Col sm={12} md={12} lg={4} >
						<h1 className="textbold">{t('carousel.title2')}<span id="textdecoration"> {t('carousel.title2-2')} </span> {t('carousel.title2-3')}</h1>
						<p className="p-subtitle">{t('carousel.subtitle2')}</p>
						<Row>
							{/* <Col xs={5} md={4} lg={2}><button className="BtnPrimary">{t('btn.btn_Orcamento')}</button></Col> */}
							<Col xs={5} md={4} lg={2}><button className="BtnSecundary">{t('btn.btn_seemore')}</button></Col>
						</Row>
					</Col>

					<Col sm={12} md={12} lg={6} className="containertambs mt-5">
						<Tambs></Tambs>
					</Col>

				</Row>
			</Container>
		</>
	)
}
