import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";
import "./SignUp.css"; 
import { createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { auth } from '../../firebase'

const SignUp = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) =>{
    setUser(currentUser);
  });



  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      alert("Registracija pavyko!");

    } catch (error) {
      console.log(error.message);
    }
  };



  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Registracija</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>El.paštas</Form.Label>
              <Form.Control type="email" onChange={(event) => {
            setRegisterEmail(event.target.value);
          }} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Slaptažodis</Form.Label>
              <Form.Control type="password"  onChange={(event) => {
            setRegisterPassword(event.target.value);
          }} required />
            </Form.Group><br></br>
            <Button onClick={register} className="w-100" type="submit">
              Registruotis
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Jau turite paskyra? <Link to="/signin">Prisijunkite</Link>
      </div>
    </>
  );
};

export default SignUp;
