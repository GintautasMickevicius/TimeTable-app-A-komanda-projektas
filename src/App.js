import Login from "./components/Login/Login";
import LostPassword from './components/LostPassword/LostPassword';
import SignUp from './components/SignUp/SignUp'
import Nav from "./components/Nav/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Tables from "./components/table/Tables";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from './components/firebase/firebase';
import {useState, useEffect} from 'react'
import { AuthProvider } from './components/firebase/AuthContext';
import VerifyEmail from "./components/verifyEmail/VerifyEmail";


// import SignUp from "./components/signup.component";

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  return (  

    <Router> 
      <div className="App">
      <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
      <Nav />
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path="/signin" element={<Login />} />
              <Route path="/lostpassword" element={<LostPassword />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="tables" element={<Tables/>} />
              <Route path="/verify-email" element={ <VerifyEmail /> } />
            </Routes>
          </div>
        </div>
        </AuthProvider>
        </div>
        </Router>



  )
}

export default App;


