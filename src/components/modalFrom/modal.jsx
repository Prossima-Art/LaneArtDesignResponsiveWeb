import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import { Container, Row, Col, Form, Button, Modal, Offcanvas } from 'react-bootstrap';
import './modal.css'

import Img1 from './img/img1.png'

import { send } from 'emailjs-com'

import { init } from '@emailjs/browser';
init("DK_q8XK1WX8HXJG8e");




export function ModalContato() {
    return (
        <>
            {['bottom'].map((placement, idx) => (
                <OffCanvasExample key={idx} placement={placement} />
            ))}
        </>
    );
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
                    <ModalForm />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}


export function ModalForm() {

    const [toSend, setToSend] = useState({
        Nome: '',
        to_name: 'LaneArtDesign',
        Detalhes: '',
        Email: '',
    });


    /* --- METHOD TO SEND THE MAIL --- */
    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_fcscug6',
            'template_jgcc3vw',
            toSend,
            'DK_q8XK1WX8HXJG8e'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };


    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };


    return (
        <>
            <Form>
                <Container>
                    <Row>
                        <Col sm={4}>
                            <img className="imgcontainer" src={Img1} alt="..." />
                        </Col>
                        <Col sm={{ span: 5 }}>
                            <Form.Group className="mt-5 mb-3" controlId="Nome">
                                <Form.Label>Nome ou Apelido*</Form.Label>
                                
                                <Form.Control type="text" placeholder="Nome" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="Email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="Detalhes">
                                <Form.Label>Conte para nós!</Form.Label>
                                <Form.Control as="textarea" rows={3} value={toSend.reply_to}/>
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
            </Form>
            
            
            <Button sm={{ span: 3, offset: 3 }} variant="primary" type="send" value={toSend.from_name} onClick={onSubmit}>Enviar</Button>
            
                
                
        </>
    )
}


