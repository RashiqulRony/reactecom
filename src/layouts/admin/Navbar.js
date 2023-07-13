import React from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
    const mobileNav = () => {
        document.body.classList.toggle('sb-sidenav-toggled');
    }

    return (
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <Link className="navbar-brand ps-3" to="/admin/dashboard">
                <img width="80" src={logo} alt="LOgo"/>
            </Link>
            <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" onClick={mobileNav} id="sidebarToggle"><i className="fa fa-bars"></i></button>

            <div className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0"></div>

            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" id="navbarDropdown" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-user fa-fw"></i></Link>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="#!">Settings</Link></li>
                        <li><Link className="dropdown-item" to="#!">Activity Log</Link></li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li><Link className="dropdown-item" to="#!">Logout</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;