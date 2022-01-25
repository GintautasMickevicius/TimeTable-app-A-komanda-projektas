import React from 'react';
import { Button } from 'react-bootstrap';
import './LostPassword.css';
import { Link } from 'react-router-dom';

const LostPassword = () => {
    return (
        <div className='lostpassword'>
            <div>
            <h1>Priminti slaptažodį</h1>
            <label for="email"><p>Pamiršote slaptažodį? Įveskite el.pašto adresą. Į el.pašto dėžutę gausite nuorodą naujam slaptažodžiui susikurti.</p></label>
            </div>
            <div>
            <input type="email" id="email" name="email"></input>
            </div>
            <p><Button variant="primary">Atkurti slaptažodį</Button></p>
            <Link to='/'>
            <p><Button variant="primary">Grįžti į pradinį puslapį</Button></p>
           </Link>
        </div>
    )
}

export default LostPassword
