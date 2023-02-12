import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

import { Col, Container, Row } from "react-bootstrap";

import Btc from "../assets/svg-pay/btc.svg";
import Car from "../assets/svg-pay/car.svg";
import Card from "../assets/svg-pay/card.svg";
import Lottie from "react-lottie";
import Pig from "../assets/svg-pay/porco.svg";
import React from "react";
import { default as animationDataBtc } from "../assets/btc.json";
import { default as animationDataPig } from "../assets/pig.json";
import { default as animationDatacard } from "../assets/creditcard.json";
import { default as animationDatadelivery } from "../assets/delivery.json";
import { useTranslation } from "react-i18next";

export default function Grid() {
  const { t } = useTranslation();

  const Btclottie = {
    loop: true,
    autoplay: true,
    animationData: animationDataBtc,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      className: "lottieimg",
    },
  };

  const Deliverylottie = {
    loop: true,
    autoplay: true,
    animationData: animationDatadelivery,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      className: "lottieimg",
    },
  };

  const Cardlottie = {
    loop: true,
    autoplay: true,
    animationData: animationDatacard,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      className: "lottieimg",
    },
  };

  const Piglottie = {
    loop: true,
    autoplay: true,
    animationData: animationDataPig,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      className: "lottieimg",
    },
  };
  return (
    <Container fluid className=" mt-5">
      <Row>
        <Col sm={12}>
          <h1 className="textbold centralized titlefont">{t("payments.h1")}
            <span id="textdecoration" className="titlefont"> {t("payments.h1-2")}</span>
            {t("payments.h1-3")} {t("payments.h1-4")} {t("payments.h1-5")}
          </h1>
        </Col>

        <Row className="mt-5">
          <Col className="cards">
            <div className="lottiecard">
              <Lottie
                options={Deliverylottie}
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: "contain",
                }}
              />
            </div>
            <p className="p-title centralized textfont">{t("payments.title1")}</p>
            <p className="p-subtitle centralized  textfont">{t("payments.subtitle1")}</p>
          </Col>

          <Col className="cards">
            <div className="lottiecard">
              <Lottie
                options={Btclottie}
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: "contain",
                }}
              />
            </div>

            <p className="p-title centralized textfont">{t("payments.title2")}</p>
            <p className="p-subtitle centralized textfont">{t("payments.subtitle2")}</p>
          </Col>

          <Col className="cards">
            <div className="lottiecard">
              <Lottie
                options={Piglottie}
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: "contain",
                }}
              />
            </div>
            <p className="p-title centralized textfont">{t("payments.title3")}</p>
            <p className="p-subtitle centralized textfont">{t("payments.subtitle3")}</p>
          </Col>

          <Col className="cards">
            <div className="lottiecard">
              <Lottie
                options={Cardlottie}
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: "contain",
                }}
              />
            </div>
            <p className="p-title centralized textfont">{t("payments.title4")}</p>
            <p className="p-subtitle centralized textfont">{t("payments.subtitle4")}</p>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

// https://lottiefiles.com/blog/working-with-lottie/how-to-use-lottie-in-react-app
