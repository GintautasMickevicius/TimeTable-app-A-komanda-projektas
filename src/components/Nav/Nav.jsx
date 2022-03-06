import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


const Nav = () => {

  return (
    <div>
      <Navbar collapseOnSelect fixed='top' variant="dark" bg="dark">
        <Container fluid>
        <Link style={{ textDecoration: 'none' }} to='/'>
          <Navbar.Brand>TimeTable</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
        </Container>
      </Navbar>
      {/* <h4> User Logged In: </h4>
      {user?.email}

      <button onClick={logout}> Sign Out </button> */}
    </div>
  );
};

export default Nav;
