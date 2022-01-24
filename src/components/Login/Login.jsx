import React, { Component } from "react";


export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Prisijungti</h3>

                <div className="form-group">
                    <label></label>
                    <input type="email" className="form-control" placeholder="El. pašto adresas" />
                </div>

                <div className="form-group">
                    <label></label>
                    <input type="password" className="form-control" placeholder="Slaptažodis" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Prisiminti mane</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Prisijungti</button>
                <p className="forgot-password text-right">
                    Pamiršote <a href="#">slaptažodį?</a>
                </p>
            </form>
        );
    }
}
