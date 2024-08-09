import { Navbar, Nav, Container, Form, Button, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function NavScroll() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <Nav.Link href="#action2">Link</Nav.Link>
            <LinkContainer to="/products">
              <Nav.Link>Products</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/add-product">
              <Nav.Link>AddProduct</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/profile">
              <Nav.Link>Profile</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <div className="d-flex justify-content-center w-100">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" className="me-2">Search</Button>
            </Form>
          </div>
          <div className="d-flex">
            <Button variant="outline-primary" className="me-2">
              <LinkContainer to="/login">
                <Nav.Link>Giriş Yap / Kayıt Ol</Nav.Link>
              </LinkContainer>
            </Button>
          </div>
          <Nav>
            <LinkContainer to="/logout">
              <Nav.Link>Logout</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;
