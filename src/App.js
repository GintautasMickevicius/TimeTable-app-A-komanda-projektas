import Login from "./components/Login/Login";
import Nav from "./components/Nav/Nav";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";

// import SignUp from "./components/signup.component";

function App() {
  return (  
    <Router>
      
      <div className="App">
      <Nav />
      <Login/>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path='/' component={Login} />
              <Route path="/sign-in" component={Login} />
              {/* <Route path="/sign-up" component={SignUp} /> */}
            </Routes>
          </div>
        </div>
        </div></Router>
    

  )
}

export default App;
