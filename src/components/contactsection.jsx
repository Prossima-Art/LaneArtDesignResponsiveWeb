import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { ModalContato } from "./offcanvas/Offcanvas";



export const Contactsection = () => {
  const { t } = useTranslation();

  return (
    <>
      <Container className="mt-5">
        <Row className="centralized">
          <Col md="auto">
            <h1 className="textbold titlefont">
              {t("contact.title")}{" "}
              <span id="textdecoration" className="titlefont">{t("contact.title1-2")}</span>{" "}
              {t("contact.title1-3")}
            </h1>
            <p className="p-subtitle centralized textfont">
              {t("contact.subtitle")}
            </p>

            <Row className="centralized">
              <Col md="auto">
                 <ModalContato>
                  <button className="BtnSecundary">
                    {t("btn.btn_Contact")}
                  </button>
                </ModalContato>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
