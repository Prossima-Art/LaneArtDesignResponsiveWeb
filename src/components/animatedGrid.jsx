import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/ButtonStyle.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import CarouselCel from "./carouselcelular/carouselCelular";

export default function AnimatedGrid() {
  return (
    <>
      <Container fluid>
        <Row className="alingdiv">
          <Col sm={12} md={6} lg={6}>
            <CarouselCel />
          </Col>

          <Col sm={12} md={6} lg={6}>
            <Row className="alingleft">
              <Text />
              <Btn />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export function Text() {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="textbold textbox titlefont ">
        {t("carousel.title1")}
        <span id="textdecoration" className="titlefont">
          {" "}
          {t("carousel.title1-2")}
        </span>
        {t("samllText")}
      </h1>
      <p className="p-subtitle textbox textfont">{t("carousel.subtitle1")}</p>
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
