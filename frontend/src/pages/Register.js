import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import axios from 'axios';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://localhost:5001/api/auth/register', {
        email,
        password
      });
      console.log('User registered successfully:', response.data);
      // Başarılı bir şekilde kayıt olunduğunda yapılacak işlemler
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Row>
        <Col>
          <Card style={{ width: '25rem' }}>
            <Card.Body>
              <Card.Title className="text-center">Register</Card.Title>
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
                  Register
                </Button>
              </Form>
              <Button variant="secondary" className="w-100 mt-4">
                <LinkContainer to='/login'>
                  <Nav.Link>Giriş Yap</Nav.Link>
                </LinkContainer>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
