import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import "./pricegrid.css";
import { ModalContato } from "../modalFrom/modal"; //lane

export function InfoTituloBuy() {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="h1-md mt-5 titlefont"> {t("pricesection.title")}</h1>
      <p className="p-subtitle textbox textfont">{t("pricesection.subtitle")}</p>
    </>
  );
}

export function Gridprice() {
  const { t } = useTranslation();
  return (
    <>
      <Container className=" mt-5">
        <Row>
          <Row className="mt-5 centralized">
            <Col sm={3} className="cards">
              <p className="p-title mt-3 ">{t("packages.Desing")}</p>
              <p className="p-subtitle centralized textfont">{t("packages.item1")}</p>
              <p className="p-subtitle centralized textfont">{t("packages.item2")}</p>
              <p className="p-subtitle centralized textfont">{t("packages.item3")}</p>
              <p className="p-subtitle centralized opacity-1 textfont">
                {t("packages.item4")}
              </p>
              <p className="p-subtitle centralized opacity-1 textfont">
                {t("packages.item5")}
              </p>
              <p className="p-subtitle centralized opacity-1 mb-5 textfont">
                {t("packages.item6")}
              </p>
            </Col>

            <Col sm={3} className="cards ">
              <p className="p-title mt-3">{t("packages.Dev")}</p>
              <p className="p-subtitle centralized opacity-1 textfont">
                {t("packages.item1")}
              </p>
              <p className="p-subtitle centralized opacity-1 textfont">
                {t("packages.item2")}
              </p>
              <p className="p-subtitle centralized opacity-1 textfont">
                {t("packages.item3")}
              </p>
              <p className="p-subtitle centralized textfont">{t("packages.item4")}</p>
              <p className="p-subtitle centralized textfont">{t("packages.item5")}</p>
              <p className="p-subtitle centralized mb-5 textfont">
                {t("packages.item6")}
              </p>
            </Col>

            <Col sm={3} className="cards">
              <p className="p-title mt-3">{t("packages.Expert")}</p>
              <p className="p-subtitle centralized">{t("packages.item1")}</p>
              <p className="p-subtitle centralized">{t("packages.item2")}</p>
              <p className="p-subtitle centralized">{t("packages.item3")}</p>
              <p className="p-subtitle centralized">{t("packages.item4")}</p>
              <p className="p-subtitle centralized">{t("packages.item5")}</p>
              <p className="p-subtitle centralized mb-5">
                {t("packages.item6")}
              </p>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
}
