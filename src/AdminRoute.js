import React, {useEffect, useState} from "react";
import {Redirect, Route, useHistory} from "react-router-dom";
import Master from "./layouts/admin/Master";
import http from "./http";
import Swal from "sweetalert2";

function AdminRoute({...rest}) {
    const history = useHistory();
    const [Authenticated, setAuthenticated] = useState(false)
    const [Loading, setLoading] = useState(true)

    useEffect( () => {
        http.get('/admin/auth-check', ).then((response) => response.data)
            .then((response) => {
                if (response.status === true) {
                    setAuthenticated(true)
                } else {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: response.message,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                setLoading(false)

            }).catch((error) => {
            console.log(error)

            });
        return () => {
            setAuthenticated(false)
        }
    }, [history]);

    if (Loading) {
        return (
            <div className="pageLoading">
                <h5>Loading...</h5>
            </div>
        );
    }

    return (
        <Route {...rest}
            render={ ({props, location}) =>
                Authenticated ? ( <Master {...props} /> ) : ( <Redirect to={ { pathname: "/login", state: { from: location } } }  /> )
            }
        />
    );
}

export default AdminRoute;