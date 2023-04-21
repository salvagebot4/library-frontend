import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function SignUpModal({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting sign up form with email ${email}, password ${password}, first name ${firstName}, and last name ${lastName}`);
    //TODO handle submit logic
    onClose();
  };

  return (
    <Modal show onHide={onClose} style={{backgroundColor: "#989898"}}>
      <Modal.Header>
        <Modal.Title>Sign Up</Modal.Title>
        <Button variant="light" onClick={onClose}>X</Button>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} required />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} required />
          </Form.Group>

          <Form.Group controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter first name" value={firstName} onChange={(event) => setFirstName(event.target.value)} required />
          </Form.Group>

          <Form.Group controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" value={lastName} onChange={(event) => setLastName(event.target.value)} required />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default SignUpModal;