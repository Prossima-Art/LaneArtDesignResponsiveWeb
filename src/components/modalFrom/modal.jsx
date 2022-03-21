import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useTranslation } from "react-i18next";

import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Modal,
  Offcanvas,
} from "react-bootstrap";
import "./modal.css";

import Img1 from "./img/img1.png";
import { send } from "emailjs-com";
import { init } from "@emailjs/browser";
init("DK_q8XK1WX8HXJG8e");

export function ModalContato() {
  return (
    <>
      {["bottom"].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} />
      ))}
    </>
  );
}

export function OffCanvasExample({ ...props }) {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        sm={{ span: 3, offset: 3 }}
        variant="primary"
        onClick={handleShow}
      >
        {t("modal.title")}
      </Button>

      <Offcanvas
        className="offcanvasCss"
        show={show}
        onHide={handleClose}
        {...props}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{t("modal.title")}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ModalForm></ModalForm>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const initialFormData = Object.freeze({
  username: "",
  email: "",
  query: "",
});

export function ModalForm() {
  const { t } = useTranslation();

  const [formData, updateFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your message. Your query has been forwarded.`);
    const templateId = "template_jgcc3vw";
    const serviceID = "service_fcscug6";
    sendFeedback(serviceID, templateId, {
      from_name: formData.name,
      message_html: formData.query,
      email: formData.email,
    });

    console.log(formData);
  };

  const sendFeedback = (serviceID, templateId, variables) => {
    window.emailjs
      .send(serviceID, templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      .catch((err) => console.error("There has been an Error.", err));
  };

  return (
    <>
      <Form className="mb-5">
        <Container>
          <Row>
            <Col sm={4}>
              <img className="imgcontainer" src={Img1} alt="..." />
            </Col>
            <Col sm={{ span: 5 }}>
              <Form.Group className="mt-5 mb-3" controlId="formGridName">
                <Form.Label>{t("modal.name")}</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="name"
                  type="name"
                  placeholder={t("modal.name")}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridEmail">
                <Form.Label>{t("modal.email")}</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="email"
                  type="email"
                  placeholder={t("modal.email")}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridQuery">
                <Form.Label>{t("modal.text")}</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="query"
                  as="textarea"
                  rows={3}
                />
              </Form.Group>
              <Col className="rtl">
                {" "}
                <Button
                  sm={{ span: 3, offset: 3 }}
                  onClick={handleSubmit}
                  variant="primary"
                  type="submit"
                >
                  {t("modal.btnsend")}
                </Button>
              </Col>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
}
