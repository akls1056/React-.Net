import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://localhost:5001/api/auth/login', {
        email,
        password
      });
      console.log('User logged in successfully:', response.data);
      const token = response.data.token;
      localStorage.setItem('authToken', token); // Token'ı local storage'a kaydet
    } catch (error) {
      console.error('Error logging in user:', error);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Row>
        <Col>
          <Card style={{ width: '25rem' }}>
            <Card.Body>
              <Card.Title className="text-center">Login</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Login
                </Button>
                <Button variant="secondary" className="w-100 mt-4">
                  <LinkContainer to='/register'>
                    <Nav.Link>Register</Nav.Link>
                  </LinkContainer>
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
