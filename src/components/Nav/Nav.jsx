import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Navbar variant="dark" bg="dark">
        <Container fluid>
        <Link style={{ textDecoration: 'none' }} to='/'>
          <Navbar.Brand>TimeTable</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
        </Container>
      </Navbar>
    </div>
  );
};

export default Nav;
