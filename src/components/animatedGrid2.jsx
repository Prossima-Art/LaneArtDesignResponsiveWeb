import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Tambs from './carouselportfolio/carouselportfolio'
import "../Styles/ButtonStyle.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { SrollimageView } from "./ScrollimageView/cards";

export const AnimatedGrid2 = () => {
  const { t } = useTranslation();

  return (
    <>
      <Container fluid className="mt-5 centralized ">
        <Row className="m-0 p-0">
          <Col lg={12}>
            <h1 className="textbold">
              {t("carousel.title2")}
              <span id="textdecoration"> {t("carousel.title2-2")} </span>{" "}
              {t("carousel.title2-3")}
            </h1>
            <p className="p-subtitle">{t("carousel.subtitle2")}</p>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="containertambs mt-5">
            <SrollimageView />
          </Col>
        </Row>
      </Container>
    </>
  );
};
