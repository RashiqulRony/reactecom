import React from "react";
import AdminRoute from './AdminRoute';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Login from "./pages/frontend/auth/Login";
import Register from "./pages/frontend/auth/Register";
import './custom.scss'
import PublicRoute from "./PublicRoute";


function App() {
  return (
      <div className="App">
          <Router>
              <Switch>
                  <Route path="/login">
                      { localStorage.getItem('__AUTH_TOKEN') ? <Redirect to="/" /> : <Login /> }
                  </Route>
                  <Route path="/register">
                      { localStorage.getItem('__AUTH_TOKEN') ? <Redirect to="/" /> : <Register /> }
                  </Route>

                  <AdminRoute path="/admin" name="Admin" />
                  <PublicRoute path="/" name="Home" />
              </Switch>
          </Router>
      </div>
  );
}

export default App;
