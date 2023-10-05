import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { BannerSvg } from "./bannersvg.jsx";
import "./portfolio.css";

export default function Portfolioinfogrid() {
  const { t } = useTranslation();
  return (
    <>
      <Container fluid className="mt-5 mx-5">
        <Row style={{ maxWidth: "90%" }}>
          <Col
            style={{ alignItems: "center", alignContent: "center" }}
            sm={12}
            md={12}
          >
            <h1
              className="titlefont"
              style={{
				fontSize: "3rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              {" "}
              {t("portfolio.title")}
            </h1>
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "regular",
                color: "gray",
              }}
            >
              {t("portfolio.subtitle")}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
