import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

import { Col, Container, Row } from "react-bootstrap";
import Lottie from "react-lottie";
import React from "react";
import { useTranslation } from "react-i18next";

import Btc from "../assets/svg-pay/btc.svg";
import Car from "../assets/svg-pay/car.svg";
import Card from "../assets/svg-pay/card.svg";
import Pig from "../assets/svg-pay/porco.svg";
import animationDataBtc from "../assets/btc.json";
import animationDataPig from "../assets/pig.json";
import animationDataCard from "../assets/creditCard.json";
import animationDataDelivery from "../assets/delivery.json";

export default function Grid() {
  const { t } = useTranslation();

  const paymentData = [
    {
      title: "payments.title1",
      subtitle: "payments.subtitle1",
      lottieOptions: {
        loop: true,
        autoplay: true,
        animationData: animationDataDelivery,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
          className: "lottieImg",
        },
      },
    },
    {
      title: "payments.title2",
      subtitle: "payments.subtitle2",
      lottieOptions: {
        loop: true,
        autoplay: true,
        animationData: animationDataBtc,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
          className: "lottieImg",
        },
      },
    },
    {
      title: "payments.title3",
      subtitle: "payments.subtitle3",
      lottieOptions: {
        loop: true,
        autoplay: true,
        animationData: animationDataPig,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
          className: "lottieImg",
        },
      },
    },
    {
      title: "payments.title4",
      subtitle: "payments.subtitle4",
      lottieOptions: {
        loop: true,
        autoplay: true,
        animationData: animationDataCard,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
          className: "lottieImg",
        },
      },
    },
  ];

  return (
    <Container fluid className="mt-5">
      <Row>
        <Col sm={12}>
          <h1 className="textBold centralized titlefont">
            {t("payments.h1")}
            <span id="textDecoration" className="titlefont">
              {t("payments.h1-2")}
            </span>{" "}
            {t("payments.h1-3")} {t("payments.h1-4")} {t("payments.h1-5")}
          </h1>
        </Col>
      </Row>
      <Row className="mt-5">
        {paymentData.map((payment, index) => (
          <Col key={index} className="cards">
            <div className="lottieCard">
              <Lottie
                options={payment.lottieOptions}
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: "contain",
                }}
              />
            </div>
            <p className="p-title centralized textFont">{t(payment.title)}</p>
            <p className="p-subtitle centralized textFont">{t(payment.subtitle)}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
