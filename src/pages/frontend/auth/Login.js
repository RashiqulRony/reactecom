import React, {useState} from "react";
import Navbar from "../../../layouts/frontend/Navbar";
import {Link, useHistory} from "react-router-dom";
import logo from '../../../assets/logo.png'
import http from "../../../http";
import Swal from "sweetalert2";

function Login() {
    const history = useHistory();

    const [loginInput, setLogin] = useState({
        'email' : '',
        'password' : '',
        'errors' : []
    });

    const handelInput = (e) => {
        e.persist()
        setLogin({ ...loginInput, [e.target.name]: e.target.value })
    }

    const loginSubmit = (e) => {
        e.preventDefault()

        const data = {
            email: loginInput.email,
            password: loginInput.password,
        }

        http.post('/login', data).then((response) => response.data)
            .then((response) => {
                if (response.status === true) {
                    localStorage.setItem('__AUTH_TOKEN', response.token)
                    localStorage.setItem('__AUTH_USER', JSON.stringify(response.user))
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: response.message,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    if (response.user.role === 'User') {
                        history.push('/')
                    } else {
                        history.push('/admin/dashboard')

                    }
                    setTimeout(function () {
                        // eslint-disable-next-line no-restricted-globals
                        location.reload()
                    }, 1500)
                } else {
                    if (response.errors) {
                        setLogin({...loginInput, errors: response.errors})
                        Swal.fire({
                            position: 'top-end',
                            icon: 'error',
                            title: 'Validation Error!!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    } else {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'error',
                            title: response.message,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
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
                        <div className="card-header">Login</div>
                        <div className="card-body">
                            <form onSubmit={loginSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" name="email" onChange={handelInput} value={loginInput.email} id="email" aria-describedby="emailHelp" />
                                    <small className="text-danger">{loginInput.errors.email}</small>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" name="password" className="form-control" onChange={handelInput} value={loginInput.password} id="password" />
                                    <small className="text-danger">{loginInput.errors.password}</small>
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