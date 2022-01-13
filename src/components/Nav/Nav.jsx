import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Nav = () => {
  return (
    <div>
      <Navbar variant="dark" bg="dark">
        <Container fluid>
          <Navbar.Brand href="/index.html">TimeTable</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
        </Container>
      </Navbar>
    </div>
  );
};

export default Nav;
