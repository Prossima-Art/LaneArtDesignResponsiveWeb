import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';

import Tambs from './carouselportfolio/carouselportfolio'
import {Carosseltitulo2} from '../texts/InfoHome';
import {CarosselSubTitulo2} from '../texts/InfoHome';
import '../Styles/ButtonStyle.css';

export const AnimatedGrid2 = () => {
	return (
		<> 
			
			<Container fluid className="mt-5">
				<Row>
						<Col sm={12} md={12} lg={4} >
              <Carosseltitulo2></Carosseltitulo2>
              <CarosselSubTitulo2></CarosselSubTitulo2>
							<Row>
								<Col sm={2} md={2} lg={3}><button className="BtnPrimary">Orçamento</button>
                </Col>
								<Col sm={2} md={2} lg={3}><button className="BtnSecundary">Ver mais</button>
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
