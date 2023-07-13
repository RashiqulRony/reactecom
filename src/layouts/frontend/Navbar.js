import React from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
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
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <Link className="nav-link" to="/login">Login</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="/register">Register</Link>
                          </li>

                      </ul>
                  </div>

              </div>
          </div>
      </nav>
  );
}


export default Navbar


