import Login from "./components/Login/Login";
import LostPassword from './components/LostPassword/LostPassword';
import SignUp from './components/SignUp/SignUp'
import Nav from "./components/Nav/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Table from "./components/table/Table";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



// import SignUp from "./components/signup.component";

function App() {
  return (  

    <Router> 
      <div className="App">
      <Nav />
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path="/signin" element={<Login />} />
              <Route path="/lostpassword" element={<LostPassword />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="table" element={<Table/>} />
            </Routes>
          </div>
        </div>
        </div>
        </Router>



  )
}

export default App;


