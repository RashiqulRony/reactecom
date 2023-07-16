import React from "react";
import {Link, useHistory} from "react-router-dom";
import logo from "../../assets/logo.png";
import http from "../../http";
import Swal from "sweetalert2";

const Navbar = (key, value) => {
    const history = useHistory();

    const logout = (e) => {
        e.preventDefault()

        http.post('/logout', {}).then((response) => response.data)
            .then((response) => {
                localStorage.removeItem('__AUTH_TOKEN')
                localStorage.removeItem('__AUTH_USER')
                if (response.status === true) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: response.message,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    history.push('/')
                    setTimeout(function () {
                        // eslint-disable-next-line no-restricted-globals
                        location.reload()
                    }, 1500)


                } else {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: 'Something went wrong. Please Login',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            }).catch((error) => {
            console.log(error);
        });

    }


    let authCheck = ''
    if (!localStorage.getItem('__AUTH_TOKEN')) {
        authCheck = (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                </li>
            </ul>
        )
    } else {
        let user = JSON.parse(localStorage.getItem('__AUTH_USER'))
        authCheck = (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                       aria-expanded="false">
                        {user.name}
                    </Link>
                    <ul className="dropdown-menu">
                        <li><button type="button" className="dropdown-item" onClick={logout} >Logout</button></li>
                    </ul>
                </li>
            </ul>
        )
    }

  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light shadow sticky-top">
          <div className="container">
              <Link className="navbar-brand" to="/">
                  <img width="80" src={logo} alt="LOgo"/>
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                      aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                          <Link className="nav-link" to="/">Home</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/product">Product</Link>
                      </li>

                  </ul>
                  <div className="d-flex">
                      {authCheck}
                  </div>

              </div>
          </div>
      </nav>
  );
}


export default Navbar


