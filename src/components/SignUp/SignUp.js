import React from 'react'

const SignUp = () => {
    return (
        <div>
            <form>
                <h3>Registracija</h3>

                <div className="form-group">
                    <label>Vardas</label>
                    <input type="text" className="form-control" placeholder="Vardas" />
                </div>

                <div className="form-group">
                    <label>Pavardė</label>
                    <input type="text" className="form-control" placeholder="Pavardė" />
                </div>

                <div className="form-group">
                    <label>E. pašto adresas</label>
                    <input type="email" className="form-control" placeholder="El. pašto adresas" />
                </div>

                <div className="form-group">
                    <label>Slaptažodis</label>
                    <input type="password" className="form-control" placeholder="Slaptažodis" />
                </div>

                <div className="form-group">
                    <label>Pakartoti slaptažodį</label>
                    <input type="password" className="form-control" placeholder="Pakartoti slaptažodį" />
                </div>
                
                <button type="submit" className="btn btn-primary btn-block">Registruoti</button>
                <button type="submit" className="btn btn-primary btn-block">Grįžti į pradinį puslapį</button>
            </form>
        </div>
    )
}

export default SignUp
