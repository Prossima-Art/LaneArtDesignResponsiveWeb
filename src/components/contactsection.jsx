import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';

import {ContactTitle} from '../texts/InfoHome';
import {ContactSubtitle} from '../texts/InfoHome';

import { useTranslation } from 'react-i18next';


export const Contactsection = () => {
	const {t}= useTranslation();
	
	return (
		<> 
			<Container className="mt-5">
			  <Row className="centralized">				
			    <Col md="auto">
						<ContactTitle></ContactTitle>
						<ContactSubtitle ></ContactSubtitle>
					<Row className="centralized">
						<Col  md="auto"><button className="BtnPrimary">{t('btn.btn_Orcamento')}</button></Col>
						<Col md="auto"><button className="BtnSecundary">{t('btn.btn_Contact')}</button></Col>
					</Row>
					</Col>
			  </Row>
</Container>
		</>
		);
}