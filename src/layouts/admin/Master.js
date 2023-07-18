import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import '../../assets/admin/css/styles.css'

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import routes from "../../routes/routes";


const Master = () => {
    return (
        <div className="sb-nav-fixed __Admin">
            <Navbar />

            <div id="layoutSidenav">
                <Sidebar />
                <div id="layoutSidenav_content">
                    <main>
                        <Switch>
                            {routes.map((route, inx) => {
                                return (
                                  route.component && (
                                      <Route
                                          key={inx}
                                          path={route.path}
                                          exact={route.exact}
                                          name={route.name}
                                          render={(props) => (
                                              <route.component {...props} />
                                          )}
                                      />
                                  )
                                )
                            })}

                            <Redirect from="/admin" to="/admin/dashboard" />

                        </Switch>
                    </main>

                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Master;