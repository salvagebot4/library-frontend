import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
    const role = localStorage.getItem('role');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    }

    //create button to user management page /users <- this is a route on the frontend not api
    return (
      <Navbar bg="dark" expand="lg">
        <Link to="/" className="nav-button mx-3 text-decoration-none">
          <Navbar.Brand style={{ color: 'white' }}>Home</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          {role === 'admin' && (
            <Nav className="mx-3">
              <Link to="/admin" className="nav-link text-white">Admin Panel</Link>
            </Nav>
          )}
          {role === 'user' && (
            <Nav className="mx-3">
              <Link to="/user" className="nav-link text-white">User Profile</Link>
            </Nav>
          )}
          {role && (
            <div className="nav-button mx-3">
              <Nav>
                <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
              </Nav>
            </div>
          )}
          {!role && (
            <div className="nav-button mx-3">
              <Nav>
                <Link to="login">
                  <Button variant="outline-light">Login</Button>
                </Link>
              </Nav>
            </div>
          )}

          {role && (
            <div className="nav-button mx-3">
              <Nav>
                <Link to="products">
                  <Button variant="outline-light">Products</Button>
                </Link>
               </Nav>
            </div>
          )}
          {role && (
            <div className="nav-button mx-3">
              <Nav>
                <Link to="users">
                <Button variant="outline-light">Users</Button>
                </Link>
              </Nav>
            </div>
          )}
        </Navbar.Collapse>
      </Navbar>
    );
  }
  

export default NavBar;