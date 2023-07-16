import React, {useState} from "react";
import Navbar from "../../../layouts/frontend/Navbar";
import {Link, useHistory} from "react-router-dom";
import logo from "../../../assets/logo.png";
import http from "../../../http";
import Swal from 'sweetalert2'


function Register() {
    const history = useHistory();

    const [registerInput, setRegister] = useState({
        'name' : '',
        'email' : '',
        'password' : '',
        'password_confirmation' : '',
        'errors' : []
    });

    const handelInput = (e) => {
      e.persist()
        setRegister({ ...registerInput, [e.target.name]: e.target.value })
    }

    const registerSubmit = (e) => {
        e.preventDefault()

        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
            password_confirmation: registerInput.password_confirmation,
        }

        http.post('/register', data).then((response) => response.data)
            .then((response) => {
                if (response.status === true) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: response.message,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    history.push('/login')
                } else {
                    setRegister({...registerInput, errors: response.errors})
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: 'Validation Error!!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            }).catch((error) => {
            console.log(error);
        });

    }


    return (
        <div>
            <Navbar />

            <div className="row py-5 justify-content-center">
                <div className="col-md-5">
                    <div className="text-center">
                        <img src={logo} alt="LOgo"/>
                    </div>
                    <div className="card shadow">
                        <div className="card-header">Register</div>
                        <div className="card-body">
                            <form onSubmit={registerSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" name="name" onChange={handelInput} value={registerInput.name} className="form-control" id="name"/>
                                    <small className="text-danger">{registerInput.errors.name}</small>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" name="email" id="email" onChange={handelInput} value={registerInput.email} aria-describedby="emailHelp" />
                                    <small className="text-danger">{registerInput.errors.email}</small>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" name="password" onChange={handelInput} value={registerInput.password} className="form-control" id="password" />
                                    <small className="text-danger">{registerInput.errors.password}</small>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password_confirmation" className="form-label">Confirm Password</label>
                                    <input type="password" name="password_confirmation" onChange={handelInput} value={registerInput.password_confirmation} className="form-control" id="password_confirmation" />
                                </div>

                                <button type="submit" className="btn btn-primary">Register</button>
                            </form>
                        </div>
                        <div className="card-footer">
                            Do you have already an account <Link to="/login">Login Now</Link>.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;


