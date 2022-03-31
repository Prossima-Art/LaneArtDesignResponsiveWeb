import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import Instagram from '../contactIcons/iconsSvg/instagram-icon.svg';
import Linkedin from '../contactIcons/iconsSvg/linkedin-icon.svg';
import WhatsApp from '../contactIcons/iconsSvg/whats-icon.svg';
import Email from '../contactIcons/iconsSvg/email-icon.svg';

import { Logo } from '../../Styles/logoHeader';

import { useTranslation } from 'react-i18next';


export default function Footer() {
	const { t } = useTranslation();

	return (
		<>
			<Container fluid className="mt-5 mb-5">
				<Row>
					<Col sm={4}><Logo /></Col>
					<Col sm={4}>
						<Link className="m-3 color" to="/" target="_top">{t('nav_bar_Home')} </Link>
						<Link className="m-3 color" to="/preco" target="_top">{t('nav_bar_Price')} </Link>
						<Link className="m-3 color" to="/portfolio">{t('nav_bar_Portfolio')}</Link>
					</Col>
					<Col sm={4}>
						<a href="https://www.instagram.com/laneartdesign/?hl=en" target="_blank"><img className="imgcontact m-2" src={Instagram} alt="Instagram Account" /></a>
						<a href="https://www.linkedin.com/company/lane-art-design/?viewAsMember=true" target="_blank"><img className="imgcontact m-2" src={Linkedin} alt="Linkedin Account" /></a>

						<a href="https://wa.me/qr/UDY4VLUBEXE7C1" target="_blank"><img className="imgcontact m-2" src={WhatsApp} alt="WhatsApp Number" /></a>

						<a href="mailto: laneartdigital@gmail.com" target="_blank"><img className="imgcontact m-2" src={Email} alt="Instagram Adress" /></a>

					</Col>

					<Row className="p-subtitle mt-5">
						<Col sm={6}> {t('footer.title')}</Col>
					</Row>
				</Row>

			</Container>
		</>
	)
}