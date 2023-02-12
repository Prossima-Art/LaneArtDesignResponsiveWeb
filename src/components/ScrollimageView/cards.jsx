import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import "./cards.css";

//--image import
import Image1 from "./images/tumb1.svg";
import Image2 from "./images/tumb2.svg";
import Image3 from "./images/tumb3.svg";

export function SrollimageView() {
  const { t } = useTranslation();

  return (
    <>
      <Container fluid className="principal m-0 p-0">
        <Row className="scrollcards">
          <img src={Image1} alt="carousel" />
          <img src={Image2} alt="carousel" />
          <img src={Image3} alt="carousel" />
        </Row>
      </Container>
    </>
  );
}
