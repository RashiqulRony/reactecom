import React from "react";
import {Link} from "react-router-dom";

const Sidebar = () => {
   return (
       <div id="layoutSidenav_nav">
           <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
               <div className="sb-sidenav-menu">
                   <div className="nav">
                       <div className="sb-sidenav-menu-heading">Core</div>
                       <Link className="nav-link" to="/admin/dashboard">
                           <div className="sb-nav-link-icon"><i className="fa fa-dashboard"></i></div>
                           Dashboard
                       </Link>
                       <div className="sb-sidenav-menu-heading">Category & Product</div>

                       <Link className="nav-link" to="/admin/category">
                           <div className="sb-nav-link-icon"><i className="fa fa-cubes"></i></div>
                           Category
                       </Link>

                       <Link className="nav-link" to="/admin/subcategory">
                           <div className="sb-nav-link-icon"><i className="fa fa-cube"></i></div>
                           Subcategory
                       </Link>

                       <Link className="nav-link" to="/admin/product">
                           <div className="sb-nav-link-icon"><i className="fa fa-shopping-cart"></i></div>
                           Product
                       </Link>

                   </div>
               </div>
           </nav>
       </div>
   );
}

export default Sidebar;