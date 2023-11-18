import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import logo from '../assets/images/logo.png'

const Header = () => {
    return (
        <>
      <Navbar  sticky="top"  collapseOnSelect expand="lg" className="bg-body-tertiary py-3">
        <Container>
          <Navbar.Brand href="#home"> 
          <img src={logo} className="nav-logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
            </Nav>
            <Nav>
              <Nav.Link className='mx-3 p-3 fw-bold' href="#deets">Home</Nav.Link>
              <Nav.Link className='mx-3 p-3 fw-bold' href="#deets">Team</Nav.Link>
              <Nav.Link className='mx-3 p-3 fw-bold' href="#deets">Service</Nav.Link>
              <Nav.Link className='mx-3 p-3 fw-bold' href="#deets">Projects</Nav.Link>
              <Nav.Link className='mx-3 p-3 fw-bold' href="#deets">Testimonials</Nav.Link>             
              <Nav.Link className='mx-3 p-3 fw-bold btn btn-outline-success' href="#deets">Login</Nav.Link>             
              <Nav.Link className='mx-3 p-3 fw-bold btn btn-success' href="#deets">Register</Nav.Link>             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    );
};

export default Header;