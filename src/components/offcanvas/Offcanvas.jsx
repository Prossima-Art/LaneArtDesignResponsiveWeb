import React, { useState } from "react";
import { Logo } from "../../Styles/logoHeader";

import { Button, Offcanvas, Form } from "react-bootstrap";
import { useTranslation } from 'react-i18next'

export function ModalContato() {
  return (
    <>
      {["end"].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} />
      ))}
    </>
  );
}

export function OffCanvasExample({ ...props }) {
  const { t } = useTranslation()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  function send2DB() {
    console.log(inputName);
    console.log(inputEmail);
  }

  return (
    
    <>
    
      <Button  className="BtnPrimary contact"onClick={handleShow}>
      {t('btn.btn_Contact')}
      </Button>
 
      <Offcanvas
        className="offcanvasCss"
        show={show}
        onHide={handleClose}
        {...props}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Logo
              Width="243"
              Height="21.88"
              className="logo-form"
              alt="Prossima Art logo"
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h3>Interested in seeing more? We'd love to have you</h3>
          <p class="text-secondary">
            Reach out to us by filling out the contact form below. We look
            forward to hearing from you!
          </p>

          <Form className="mb-5">
            <Form.Group
              className="row-md-2 mx-2"
              controlId="form.ControlInputName"
            >
              <Form.Label column sm="4">
                Your name
              </Form.Label>
              <Form.Control
                className="rounded-5 mb-3"
                as="input"
                placeholder="your name"
                rows={2}
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="row-md-3 mx-2 "
              controlId="from.ControlInputEmail"
            >
              <Form.Label column sm="4">
                Email address
              </Form.Label>
              <Form.Control
                className="rounded-5"
                type="email"
                placeholder="name@example.com"
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
              />
            </Form.Group>
          </Form>
          <Button
            className="rounded-5"
            style={{
              backgroundColor: "#762CE6",
              border: "none",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
            variant="primary"
            type="submit"
            onClick={send2DB}
          >
            Join The Waitlist!
          </Button>
        </Offcanvas.Body>
        <p  class="text-secondary text-center mb-5">
          Prefer email? <a href="mailto:prossima.art@gmail.com" class="text-primary">prossima.art@gmail.com </a>
        </p>
      </Offcanvas>
    </>
  );
}
