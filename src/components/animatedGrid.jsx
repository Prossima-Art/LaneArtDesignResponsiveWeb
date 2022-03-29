import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/ButtonStyle.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import CarouselCel from "./carouselcelular/carouselcelular.jsx";

export const AnimatedGrid = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <CarouselCel></CarouselCel>
          </Col>

          <Col sm={12} md={6} lg={6} className="textcenter">
            <Text />
            <Row>
              <Col xs={5} md={4} lg={1}>
                <Btn />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export function Text() {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="textbold textbox">
        {t("carousel.title1")}
        <span id="textdecoration"> {t("carousel.title1-2")}</span>
        {t("samllText")}
      </h1>
      <p className="p-subtitle textbox">{t("carousel.subtitle1")}</p>
    </>
  );
}

export function Btn() {
  const { t } = useTranslation();
  return (
    <>
      <Link to="/Portfolio">
        <button className="BtnSecundary">{t("btn.btn_seemore")}</button>
      </Link>
    </>
  );
}
