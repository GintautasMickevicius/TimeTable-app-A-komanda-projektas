import React from "react";
import { useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { auth } from '../../firebase'


const Nav = () => {

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) =>{
    setUser(currentUser);
  });

  const logout = async () => {

    await signOut(auth);
  };

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
