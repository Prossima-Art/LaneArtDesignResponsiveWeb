import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';

import {ContactTitle} from '../texts/InfoHome';
import {ContactSubtitle} from '../texts/InfoHome';


export const Contactsection = () => {
	return (
		<> 
			<Container className="mt-5">
			  <Row className="centralized">				
			    <Col md="auto">
						<ContactTitle></ContactTitle>
						<ContactSubtitle ></ContactSubtitle>
					<Row className="centralized">
						<Col  md="auto"><button className="BtnPrimary">Orçamento</button></Col>
						<Col md="auto"><button className="BtnSecundary">Contato</button></Col>
					</Row>
					</Col>
			  </Row>
</Container>
		</>
		);
}