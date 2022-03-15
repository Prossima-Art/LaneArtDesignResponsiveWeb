import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import {Container, Row, Col, Form, Button, Modal, Offcanvas} from 'react-bootstrap';
import './modal.css'

import Img1 from './imgForm/img1.png'

export function ModalForm() {
  return (
		<>
			
				<Form>
					<Container>
						<Row>					
							<Col sm={4}>
	 						<img className="imgcontainer" src={Img1} alt="..." />
 							</Col>
							<Col sm={{ span: 5 }}>
							<Form.Group className="mt-5 mb-3" controlId="formGridEmail">
 				      <Form.Label>Nome ou Apelido*</Form.Label>
 				      <Form.Control type="email" placeholder="Nome" /></Form.Group>

							<Form.Group className="mb-3" controlId="formGridEmail">
 				      <Form.Label>Nome ou Apelido</Form.Label>
 				      <Form.Control type="email" placeholder="Nome" /></Form.Group>

							<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
 					    <Form.Label>Example text area</Form.Label>
 					    <Form.Control as="textarea" rows={3} />
 					  	</Form.Group>
								
							</Col>
					  </Row>
					</Container>
				  
					
				</Form>
			<Button sm={{ span: 3, offset: 3 }} variant="primary" type="submit">Enviar</Button>
		</>
  )
}




export function OffCanvasExample({ ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button sm={{ span: 3, offset: 3 }} variant="primary" onClick={handleShow}>Contato</Button>
			
      <Offcanvas className="offcanvasCss" show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Contato</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          	<ModalForm/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export function ModalContato() {
  return (
    <>
      {['bottom'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} />
      ))}
    </>
  );
}

