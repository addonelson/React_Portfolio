import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form'
import "./style.css";
import { validateEmail } from "../../utils/helpers";

export default function Contact() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        return name === "fullName" ? setFullName(value) : name === "email" ? setEmail(value) : setMessage(value);
    }

    const handleFormSubmit = (e) => {

        e.preventDefault();
        if (!validateEmail(email)) {
            alert("Invalid email. Please use a valid email.");
            return;
        }
        if (fullName === "" || email === "" || message === "") {
            alert("All fields are required.");
            return;
        } 
        setFullName('');
        setEmail('');
        setMessage('');
    };

    return (
        <Container className="container-center">
            <Form>
                <Row className="mb-3">
                    <h2 className="about-title">Lets get in touch</h2>
                    <p>Feel free to email me at aaron.donelson23@gmail.com or send me a message by filling out the form below:</p>
                    <Form.Group as={Col} lg={6} sm={12} className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={fullName} onChange={handleInputChange} name="fullName" />
                    </Form.Group>
                    <Form.Group as={Col} lg={6} sm={12} className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} value={message} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group> <button className="button6" target="_blank" rel="noopener" onClick={handleFormSubmit} name="message">Submit</button></Form.Group>
            </Form>
        </Container>
    )
}