import React from 'react'
import "./index.css"
import React, { Component } from "react";


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
            <Button variant="primary">Atkurti slaptažodį</Button>
        </div>
    )
}

export default LostPassword
