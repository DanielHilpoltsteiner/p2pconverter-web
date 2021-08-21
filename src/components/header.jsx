import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img alt="" src="/img/workflow32.png" width="32" height="32" className="d-inline-block align-top invimg" /> P2PConverter
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#reportbug">Report a bug</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
