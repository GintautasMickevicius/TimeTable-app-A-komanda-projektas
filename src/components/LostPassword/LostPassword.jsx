import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './LostPassword.css';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase'
import { sendPasswordResetEmail } from 'firebase/auth';

const LostPassword = () => {

    const [email, setEmail] = useState('');

    const forgotPassword = (e, Email) => {
        e.preventDefault();
        sendPasswordResetEmail(auth, Email)
            .then(function () {
                alert('Please check your email...')
            }).catch(function (e) {
                console.log(e)
            }) 
        }

    return (
        <div className='lostpassword'>
            <div>
            <h1>Priminti slaptažodį</h1>
            <label for="email"><p>Pamiršote slaptažodį? Įveskite el.pašto adresą. Į el.pašto dėžutę gausite nuorodą naujam slaptažodžiui susikurti.</p></label>
            </div>
            <div>
            <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <p><Button variant="primary" onClick={(event) => {forgotPassword(event, email)}} >Atkurti slaptažodį</Button></p>
            <Link to='/'>
            <p><Button variant="primary">Grįžti į pradinį puslapį</Button></p>
           </Link>
        </div>
    )
}

export default LostPassword
