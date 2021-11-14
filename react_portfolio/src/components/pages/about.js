import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css"

export default function About() {
    return (
        <Container className="about-container">
            <Row className="row-title justify-content-md-center">
                <Col className="about-title justify-content-md-center" lg="2">About Me</Col>
            </Row>
            
            <Row>
                <Col className="about-para"> I am a Marine Corps veteran
                        after serving my 6 years in the Corps I got my Associates of
                        Science in Electrical Engineering.
                        With this degree I was able to get into machine maintenance briefly while I was still living in
                        California.
                        Once I moved from California to Pennsylvania I became a machine operator with Nestle, where I
                        moved
                        my way
                        up on the company
                        from an operator to shift lead then Mechanic. I took my learnings to Kuerig Dr. Pepper as
                        a
                        shift
                        lead. Currently
                        building my skillset with HTML, CSS, JavaScript, and Vanilla in a programming bootcamp with Penn
                        State.
                </Col>
            </Row>
        </Container >
    )

}