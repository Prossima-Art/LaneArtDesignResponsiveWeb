import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';

import Tambs from './carouselportfolio/carouselportfolio'
import {Carosseltitulo2} from '../texts/InfoHome';
import {CarosselSubTitulo2} from '../texts/InfoHome';
import '../Styles/ButtonStyle.css';

import { useTranslation } from 'react-i18next';

export const AnimatedGrid2 = () => {
	const {t}= useTranslation();

	return (
		<> 
			
			<Container fluid className="mt-5">
				<Row>
						<Col sm={12} md={12} lg={4} >
              <Carosseltitulo2></Carosseltitulo2>
              <CarosselSubTitulo2></CarosselSubTitulo2>
							<Row>
								<Col xs={2} md={4} lg={2}><button className="BtnPrimary">{t('btn.btn_Orcamento')}</button>
                </Col>
								<Col xs={2} md={4} lg={2}><button className="BtnSecundary">{t('btn.btn_seemore')}</button>
                </Col>
							</Row>
            </Col>

					<Col sm={12}  md={12} lg={6} className="containertambs mt-5">
						<Tambs></Tambs>
					</Col>
          
				</Row>
	    </Container>
    </>
  )
}
