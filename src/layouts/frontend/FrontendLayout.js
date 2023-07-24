import React from "react";
import {Switch, Route} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FrontendRoutes from "../../routes/FrontendRoutes";
import '../../assets/frontend/custom'


const FrontendLayout = () => {
    return (
        <div className="__Frontend">
            <Navbar />
            <div>
                <Switch>
                    {FrontendRoutes.map((FrontendRoute, inx) => {
                        return (
                            FrontendRoute.component && (
                                <Route
                                    key={inx}
                                    path={FrontendRoute.path}
                                    exact={FrontendRoute.exact}
                                    name={FrontendRoute.name}
                                    render={(props) => (
                                        // eslint-disable-next-line react/jsx-pascal-case
                                        <FrontendRoute.component {...props} />
                                    )}
                                />
                            )
                        )
                    })}
                </Switch>
            </div>
            <Footer />
        </div>
    );
}

export default FrontendLayout;