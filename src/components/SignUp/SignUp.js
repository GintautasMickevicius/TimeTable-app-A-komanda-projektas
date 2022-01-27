import React from 'react'
import { Link } from 'react-router-dom'
import './SignUp.css';

const SignUp = () => {
    return (
        <div>
            <form>
                <h3>Registracija</h3>

                <div className="form-group">
                    <label></label>
                    <input type="text" className="form-control" placeholder="Vardas" />
                </div>

                <div className="form-group">
                    <label></label>
                    <input type="text" className="form-control" placeholder="Pavardė" />
                </div>

                <div className="form-group">
                    <label></label>
                    <input type="email" className="form-control" placeholder="El. pašto adresas" />
                </div>

                <div className="form-group">
                    <label></label>
                    <input type="password" className="form-control" placeholder="Slaptažodis" />
                </div>

                <div className="form-group">
                    <label></label>
                    <input type="password" className="form-control" placeholder="Pakartoti slaptažodį" />
                </div>
                
                <p><button type="submit" className="btn btn-primary btn-block">Registruoti</button></p>  
                <Link to='/'>
               <p><button type="submit" className="btn btn-primary btn-block">Grįžti į pradinį puslapį</button></p>
                </Link>
            </form>
        </div>
    )
}

export default SignUp
