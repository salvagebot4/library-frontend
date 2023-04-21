import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="dark" expand="lg">
      <Link to="/" className="nav-button mx-3 text-decoration-none">
        <Navbar.Brand style={{ color: 'white' }}>Home</Navbar.Brand>
      </Link>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <div className="nav-button mx-3">
          <Nav>
            <Link to="login">
              <Button variant="outline-light">Login</Button>
            </Link>
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;