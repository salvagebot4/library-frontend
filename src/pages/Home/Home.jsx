import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">The Book Nook</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#users">Users</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="home-content">
        <h1>Welcome to The Book Nook</h1>
        <p>Your one-stop-shop for managing your library data.</p>
        <div className="options-container">
          <div className="option">
            <h2>Product Management</h2>
            <p>Manage your products, such as books and media, including adding, editing, and deleting them.</p>
            <Link to="/products"><Button variant="primary">Go to Product Management</Button></Link>
          </div>
          <div className="option">
            <h2>User Management</h2>
            <p>Create and manage users.</p>
            <Link to="/users"><Button variant="primary">Go to User Management</Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;