import { useState } from "react";
import {signInWithEmailAndPassword, sendEmailVerification} from 'firebase/auth';
import { Link } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";
import { auth } from '../firebase/firebase'
import { useAuthValue } from "../firebase/AuthContext";
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [error, setError] = useState('')
    const {setTimeActive} = useAuthValue()

    const navigate = useNavigate()
    
    const login = e => {
      e.preventDefault()
      signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then(() => {
        if(!auth.currentUser.emailVerified) {
          sendEmailVerification(auth.currentUser)
          .then(() => {
            setTimeActive(true)
            navigate('/verify-email')
          })
        .catch(err => alert(err.message))
      }else{
        navigate('/table')
      }
      })
      .catch(err => setError(err.message))
    }

  
    return (
        <>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Prisijunkite</h2>
              {error && <div className='auth__error'>{error}</div>}
              <Form>
                <Form.Group id="email">
                  <Form.Label>El.paštas</Form.Label>
                  <Form.Control type="email" onChange={(event) => {
                setLoginEmail(event.target.value);
              }} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Slaptažodis</Form.Label>
                  <Form.Control type="password"  onChange={(event) => {
                setLoginPassword(event.target.value);
              }} required />
                </Form.Group><br></br>
                <Button onClick={login} className="w-100" type="submit">
                  Prisijungti
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Neturite paskyros? <Link to="/signup">Registruotis</Link>
          </div>
          <div className="w-100 text-center mt-2">
            Pamiršote slaptažodį? <Link to="/lostPassword">Atkurti slaptažodį</Link>
          </div>
        </>
  )
}

export default Login