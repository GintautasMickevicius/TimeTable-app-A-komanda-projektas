import { useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { Link } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";
import { auth } from '../../firebase'

const Login = () => {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) =>{
      setUser(currentUser);
    });

    const login = async () => {
        try {
          const user = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
          );
          console.log(user);
        } catch (error) {
          console.log(error.message);
        }
      };

  
    return (
        <>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Prisijunkite</h2>
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
        </>
  )
}

export default Login