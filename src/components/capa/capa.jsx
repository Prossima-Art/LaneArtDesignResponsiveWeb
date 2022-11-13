import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import { Container, Col, Row, Stack } from "react-bootstrap";
import { motion } from "framer-motion";
import IconPlay from "../../assets/svg/Play.svg";
import "./capa.css";
import "../../Styles/ButtonStyle.css";
import { useTranslation } from "react-i18next";
import Dedo from "./images-carousel/dedo.png";
import Flash from "./images-carousel/flash.png";
import AMao from "./images-carousel/apenasmao.png";
import EyeClosed from "./images-carousel/eye-close.png";
import EyeOpen from "./images-carousel/eye-open.png";
import { ModalContato } from "../modalFrom/modal";

const Eyes = [EyeClosed, EyeOpen];

const icons = [
  {
    component: Dedo,
    class: "dedo",
  },
  {
    component: Flash,
    class: "flash",
  },
  {
    component: AMao,
    class: "mao",
  },
];
export default function Capa() {
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    const index = setInterval(() => {
      setCurrentImage(Eyes[Math.floor(Math.random() * Eyes.length)]);
    }, 5000);
    return () => clearInterval(index);
  }, []);

  return (
    <>
      <Container fluid className="backgoundcaroussel">
        <Row>
          <Col className="centralized mt-5" sx={12}>
            <h1 className="cols-auto h1-md">
              {t("Info.capaTitle")} {t("Info.capaTitlebr")} <br></br>
              {t("Info.of")}{" "}
              <span id="textdecoration">{t("Info.capaTitleDecoration")}</span>
            </h1>
            <p className="cols-auto p-subtitle1 mt-5">
              {t("Info.capasubtitle")} {t("Info.capasubtitle2")}{" "}
              <span id="textdecoration">{t("Info.capasubtitle3")}</span>
              {t("samllText")}
            </p>

            <Row className="centralized margemtop">
              <Col sx={4} xs="auto" className="p-0">
                <ModalContato>
                  <button className="BtnPrimary contact">
                    {t("btn.btn_Contact")}
                  </button>
                </ModalContato>
                {icons.map((icon) => (
                  <img
                    key={icon.class}
                    src={icon.component}
                    alt={icon.class}
                    className={icon.class}
                  />
                ))}
                <img className="eye" src={currentImage} />
              </Col>
              <Col sx={8} xs="auto">
                <div>
                  <a
                    href="https://www.instagram.com/laneartdesign/?hl=en"
                    target="_blank"
                    className="row row-cols-auto"
                  >
                    <img className="IconPlay" src={IconPlay} alt="Icon" />
                    <motion.p
                      initial={{ x: 100 }}
                      animate={{ x: 0 }}
                      transition={{ duration: 1, delay: 1 }}
                      className="textIcon"
                    >
                      {t("text.textPlayIcon")}
                      <br></br>
                      {t("text.textPlayIcon2")}
                    </motion.p>
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* <Container fluid >
				<Row>
					<Col className="center grid" sx={12} md={6}>
						<h1 className="cols-auto h1-md" >{t('Info.capaTitle')}<br></br>{t('Info.capaTitlebr')}<br></br><span id="textdecoration">{t('Info.capaTitleDecoration')}</span></h1>
						<p className="cols-auto p-subtitle">{t('Info.capasubtitle')}<br></br>{t('Info.capasubtitle2')}<br></br><span id="textdecoration">{t('Info.capasubtitle3')}</span>{t('samllText')}</p>
						
						<Row className="ml-center">
							<Col sx={2} xs="auto" className="p-0">
								<ModalContato>
									<button className="BtnPrimary">{t('btn.btn_Contact')}</button>
								</ModalContato>
							</Col>
							<Col sx={8} xs="auto">
								<div>
									<a href="https://www.instagram.com/laneartdesign/?hl=en" target="_blank" className="row row-cols-auto">
										<img className="IconPlay" src={IconPlay} alt="Icon" />
										<motion.p initial={{ x: 100 }} animate={{ x: 0 }} transition={{ duration: 1, delay: 1 }} className="textIcon">{t('text.textPlayIcon')}<br></br>{t('text.textPlayIcon2')}</motion.p>
									</a>
								</div>
							</Col>
						</Row>

					</Col>
					<Col sx={12} md={6}>
						<CarouNuka></CarouNuka>
					</Col>
				</Row>
			</Container> */}
    </>
  );
}
