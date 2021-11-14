import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'


import "./style.css";
import { Container } from 'react-bootstrap';
// Bootstrap popover for phone number
const popover = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">480-430-7085</Popover.Header>
    </Popover>
);
const Example = () => (
    <OverlayTrigger trigger="click" placement="left" overlay={popover}>
        <i variant="success" className="fas fa-phone"></i>
    </OverlayTrigger>
);

export default function Footer() {
    return (
        <Container className="footer justify-content-md-center">
            <Row >
                <Col className="padding-i"><a href="https://github.com/addonelson" target="_blank" rel="noopener"><i className="fab fa-github"></i></a></Col>
                <Col className="padding-i"><a href="mailto:aaron.donelson23@gmail.com" ><i className="fas fa-envelope"></i></a></Col>
                <Col className="padding-i"><a href="https://www.linkedin.com/in/aaron-donelson-10aa27218/" target="_blank" rel="noopener"><i className="fab fa-linkedin"></i></a></Col>
                <Col className="padding-i"><Example /></Col>
            </Row>
        </Container>
    )
}
