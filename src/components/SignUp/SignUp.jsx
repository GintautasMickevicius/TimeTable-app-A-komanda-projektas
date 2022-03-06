import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";
import "./SignUp.css"; 
import { auth } from '../firebase/firebase';
import {createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth';
import {useAuthValue} from '../firebase/AuthContext';
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const {setTimeActive} = useAuthValue();

  const navigate = useNavigate();

  const validatePassword = () => {
    let isValid = true
    if (registerPassword !== '' && confirmPassword !== ''){
      if (registerPassword !== confirmPassword) {
        isValid = false
        setError('Passwords does not match')
      }
    }
    return isValid
  }

  const register = e => {
    e.preventDefault()
    setError('')
    if(validatePassword()) {
      // Create a new user with email and password using firebase
        createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
        .then(() => {
          sendEmailVerification(auth.currentUser)   
          .then(() => {
            setTimeActive(true)
            navigate('/verify-email')
          }).catch((err) => alert(err.message))
        })
        .catch(err => setError(err.message))
    }
    setRegisterEmail('')
    setRegisterPassword('')
    setConfirmPassword('')
  }



  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Registracija</h2>
          {error && <div className='auth__error'>{error}</div>}
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
            </Form.Group>
            <Form.Group id="confirmPassword">
              <Form.Label>Patvirtinkite slaptažodi</Form.Label>
              <Form.Control type="password"  onChange={(event) => {
            setConfirmPassword(event.target.value);
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
