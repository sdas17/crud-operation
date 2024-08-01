import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
     <Navbar expand="lg" className="bg-body-bg-primary">
      <Container>
        <Navbar.Brand href="#home">Employee Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> 
          <Nav.Link href="/">Home</Nav.Link>
                      <Nav.Link href="/form">Post Employee</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;
