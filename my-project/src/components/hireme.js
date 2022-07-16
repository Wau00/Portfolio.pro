import React, { useState } from "react";
import { Form, Row, Col, Button, Container, } from "react-bootstrap"
import { validateEmail } from '../utils/helpers.js';



const ContactMe = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setErrorMessage('Warning: Invalid email address!');
            return;
        }
        if (message === '') {
            setErrorMessage(
                `Warning: Empty message!`
            );
            return;
        }
        setName('');
        setMessage('');
        setEmail('');
        setErrorMessage('');
    };
    return (
        <>
            <Container>
                <Form>
                    <Row>
                        <Form.Group className="mb-3">
                            <label class="label">
                                <span class="label-text">Adress e-mail</span>
                            </label>
                            <Form.Control className="textarea textareaxc textarea-bordered" as="textarea" value={email}
                                name="email"
                                onChange={handleInputChange} type="email" placeholder="Enter email" />
                        </Form.Group>
                    </Row>
                    <Row>
                        {errorMessage && (
                            <div class="alert alert-warning shadow-lg">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                    <span>{errorMessage}</span>
                                </div>
                            </div>
                        )}
                    </Row>
                    <Row>
                        <Form.Group className="mb-3">
                            <label class="label">
                                <span class="label-text">Message</span>
                            </label>
                            <Form.Control className="textarea textareax textarea-bordered" as="textarea" value={message}
                                name="message"
                                onChange={handleInputChange} type="text" placeholder="Send me a Message" />
                        </Form.Group>
                    </Row>
                    <Button className="btn-block btn rounded-full btn-sm sm:btn-sm md:btn-md  btn-primary " variant="primary" type="submit" onClick={handleFormSubmit}>
                        Send!
                    </Button>
                </Form>

            </Container>
        </>
    )
}

export default ContactMe;