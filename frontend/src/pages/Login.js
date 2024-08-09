import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
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

      // JWT token'ı ve kullanıcı rolünü localStorage'da sakla
      const token = response.data.token;
      localStorage.setItem('token', token);

      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      localStorage.setItem('role', decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']);


      localStorage.setItem('email', email);  // Kullanıcı e-posta bilgisini sakla
      
      // Başarılı girişten sonra yönlendirme yapılabilir
      window.location.href = '/';
      console.log(decodedToken);
    } catch (error) {
      console.error('There was an error logging in!', error);
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
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
