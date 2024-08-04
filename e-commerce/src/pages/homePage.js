import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product 1', price: '$10', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: '$20', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: '$30', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Product 4', price: '$40', image: 'https://via.placeholder.com/150' },
];

function HomePage() {
  return (
    <Container>
      <Row className="my-4">
        <Col>
          <img src="https://via.placeholder.com/1200x300" alt="Banner" className="img-fluid" />
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <h2>Featured Products</h2>
        </Col>
      </Row>
      <Row>
        {products.map(product => (
          <Col key={product.id} sm={6} md={4} lg={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Link to={`/product/${product.id}`}>
                  <Button variant="primary">View Product</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomePage;
