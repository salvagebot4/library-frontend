import React from 'react';
import { Container, Row, Col, Card, Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {

  return (
    <div className="home">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">The Book Nook</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/users">Users</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <h1>Welcome to The Book Nook</h1>
            <p>We offer a wide variety of books, media, devices, and more for borrowing. Use the search bar to find what you're looking for.</p>
            <Button variant="primary" href="#borrow">Borrow Now</Button>
          </Col>
          <Col>
            <Card className="featured-card">
              <Card.Body>
                <Card.Title>Featured Item</Card.Title>
                <Card.Text>
                  Check out our featured item this month!
                </Card.Text>
                <Button variant="primary" href="#item">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home;
