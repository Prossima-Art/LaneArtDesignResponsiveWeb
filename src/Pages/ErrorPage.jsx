import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const PageNotFound = () => {
    const {t}= useTranslation();
    return (
        
            <Container fluid className="bg404error"  id="info">
                <Row className="errortext">
                <h3><span className="light">O</span><span className="medium">O</span><span className="bold">O</span><span>ps!</span></h3>
                <h3>{t('error.title')}</h3>
                </Row>
            </Container>
        
    )
}

export default PageNotFound;