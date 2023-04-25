//Login page with form
//TODO: sign up button for student/faculty
//      will pop up a modal with a sign up form.


import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from "axios";
import './Login.css';
import * as Components from '../../components';

const Login = () => {
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUpButton = () => {
        setShowModal(true);
    };
    
    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        console.log(`Attempting to login in with email: ${email}`);

        //navigate('/');

        const options = {
            method: 'POST',
            url: 'https://library-management-server.herokuapp.com/api/login',
            headers: {'Content-Type': 'application/json'},
            data: { email, password }
        };

        try {
            const response = await axios.request(options);
            
            const responseData = response.data;

            //console.log(responseData[0]);

            for (const key in responseData[0]) {
                if (responseData[0].hasOwnProperty(key)) {
                    const value = responseData[0][key];
                    //console.log(key + ': ' + value);
                    localStorage.setItem(key, value);
                }
            }
            
            const role = localStorage.getItem('role');

            console.log(role);
            if (role === 'admin') 
            {
                navigate('/admin');
            } 
            else if (role === 'user')
            {
                navigate('/user');
            }
            else 
            {
                navigate('/');
            }

            } catch (error) {
                console.error(error);
                alert("FORBIDDEN");
                console.log("FORBIDDEN");
            }



    };


    return (
        <Container>
          <Row>
            <Col>
                <h1>Login Page</h1>
                <Form onSubmit={handleLogin}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                </Form.Group>
    
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} required />
                </Form.Group>
    
                <Button variant="primary" type="submit">
                    Log In
                </Button>
                </Form>
                <br />
                <p>Don't have an account? <Button variant="link" onClick={handleSignUpButton}>Sign up</Button></p>
                {showModal && <Components.SignUpModal onClose={handleCloseModal} />}
            </Col>
          </Row>
        </Container>
    );
}

export default Login;