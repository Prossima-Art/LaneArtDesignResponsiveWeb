import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import "./cards.css";

import Image1 from "./images/tumb1.svg";
import Image2 from "./images/tumb2.svg";
import Image3 from "./images/tumb3.svg";

export function SrollimageView() {
  const { t } = useTranslation();

  const images = [Image1, Image2, Image3];

  return (
    <>
      <Container fluid className="principal m-0 p-0">
        <Row className="scrollCards">
          {images.map((image, index) => (
            <img key={index} src={image} alt="carousel" />
          ))}
        </Row>
      </Container>
    </>
  );
}