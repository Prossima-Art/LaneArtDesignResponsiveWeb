import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import Instagram from "./iconsSvg/instagram-icon.svg";
import Linkedin from "./iconsSvg/linkedin-icon.svg";
import WhatsApp from "./iconsSvg/whats-icon.svg";
import Email from "./iconsSvg/email-icon.svg";

import "../portfolioInfogrid/portfolio.css";
import "../../App.css";

export default function ContactGrid() {
  const { t } = useTranslation();

  return (
    <>
      <Container fluid className="mt-5 mb-5">
        <Row className="centralized">
          <Col sm={12}>
            <h1 className="textBold titlefont"> {t("contact.contacttitle")}</h1>{" "}
          </Col>
          <Col sm={12} className="sizebox">
            <p className="p-subtitle textfont">{t("contact.contactsubtitle")}</p>{" "}
          </Col>
          <Row className="centralized">
            <Col sm={4}>
              <a href="https://www.instagram.com/laneartdesign/?hl=en">
                <img
                  className="imgcontact m-2"
                  src={Instagram}
                  alt="Instagram Account"
                />
              </a>
              <a href="https://www.linkedin.com/company/lane-art-design/?viewAsMember=true">
                <img
                  className="imgcontact m-2"
                  src={Linkedin}
                  alt="Linkedin Account"
                />
              </a>
              <a href="https://wa.me/qr/UDY4VLUBEXE7C1">
                <img
                  className="imgcontact m-2"
                  src={WhatsApp}
                  alt="WhatsApp Number"
                />
              </a>
              <a href="mailto: laneartdigital@gmail.com">
                <img
                  className="imgcontact m-2"
                  src={Email}
                  alt="Instagram Adress"
                />
              </a>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
}
