import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavbarFunction() {
    return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img
          alt=''
          src="./../guinea.jpg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Cooking Hero
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="\">Home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
}
//Add the following after the home href
//<Nav.Link href="\about">About Us</Nav.Link>

export default NavbarFunction;