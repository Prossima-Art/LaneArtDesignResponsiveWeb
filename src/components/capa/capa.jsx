import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import { Container, Col, Row, Stack } from "react-bootstrap";
import { motion } from "framer-motion";
import IconPlay from "../../assets/svg/Play.svg";
import "./capa.css";
import "../../Styles/ButtonStyle.css";
import CarouNuka from "./carousel-capa.jsx";
import { useTranslation } from "react-i18next";

import { ModalContato } from "../modalFrom/modal";

export default function Capa() {
  const { t } = useTranslation();

  return (
    <>
      <Container fluid className="backgoundcaroussel">
        <Row>
          <Col className="centralized mt-5" sx={12}>
            <h1 className="cols-auto h1-md">
              {t("Info.capaTitle")} {t("Info.capaTitlebr")}{" "}
              <span id="textdecoration">{t("Info.capaTitleDecoration")}</span>
            </h1>
            <p className="cols-auto p-subtitle1 mt-5">
              {t("Info.capasubtitle")}
             
              {t("Info.capasubtitle2")}{" "}
			  <span id="textdecoration">{t("Info.capasubtitle3")}</span>
              {t("samllText")}
            </p>

            <Row className="centralized margemtop">
              <Col sx={4} xs="auto" className="p-0 ">
                <ModalContato>
                  <button className="BtnPrimary">{t("btn.btn_Contact")}</button>
                </ModalContato>
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



