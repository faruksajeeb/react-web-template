import React from 'react';
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

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
              <NavLink className={({isActive})=>isActive? "active-item mx-3 p-3 fw-bold":"pending-item mx-3 p-3 fw-bold"} to="/">Home</NavLink>
              <NavLink className={({isActive})=>isActive? "active-item mx-3 p-3 fw-bold":"pending-item mx-3 p-3 fw-bold"} to="/team">Team</NavLink>
              <NavLink className={({isActive})=>isActive? "active-item mx-3 p-3 fw-bold":"pending-item mx-3 p-3 fw-bold"} to="/service">Service</NavLink>
              <NavLink className={({isActive})=>isActive? "active-item mx-3 p-3 fw-bold":"pending-item mx-3 p-3 fw-bold"} to="/project">Projects</NavLink>
              <NavLink className={({isActive})=>isActive? "active-item mx-3 p-3 fw-bold":"pending-item mx-3 p-3 fw-bold"} to="/testimonial">Testimonials</NavLink>             
              <NavLink className={({isActive})=>isActive? "active-item mx-3 p-3 fw-bold btn btn-outline-success":"pending-item mx-3 p-3 fw-bold btn btn-outline-success"}  href="#deets">Login</NavLink>             
              <NavLink className={({isActive})=>isActive? "active-item mx-3 p-3 fw-bold btn btn-success":"pending-item mx-3 p-3 fw-bold btn btn-success"}  href="#deets">Register</NavLink>             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    );
};

export default Header;