import React from "react";
import Navbar from "../../../layouts/frontend/Navbar";
import {Link} from "react-router-dom";
import logo from '../../../assets/logo.png'

function Login() {
    return (
        <div>
            <Navbar />

            <div className="row py-5 justify-content-center">
                <div className="col-md-5">
                    <div className="text-center">
                        <img src={logo} alt="LOgo"/>
                    </div>
                    <div className="card shadow">
                        <div className="card-header">Login</div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" name="password" className="form-control" id="password" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                        </div>
                        <div className="card-footer">
                            Do you have no account <Link to="/register">Register Now</Link>.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login