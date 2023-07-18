import React from "react";
import AdminRoute from './AdminRoute';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Home from "./pages/frontend/Home";
import Login from "./pages/frontend/auth/Login";
import Register from "./pages/frontend/auth/Register";
import './custom.scss'


function App() {
  return (
      <div className="App">
          <Router>
              <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/login">
                      { localStorage.getItem('__AUTH_TOKEN') ? <Redirect to="/" /> : <Login /> }
                  </Route>
                  <Route path="/register">
                      { localStorage.getItem('__AUTH_TOKEN') ? <Redirect to="/" /> : <Register /> }
                  </Route>

                  {/*<Route path="/admin" name="Admin" render={(props) => <Master {...props} /> } />*/}

                  <AdminRoute path="/admin" name="Admin" />
              </Switch>
          </Router>
      </div>
  );
}

export default App;
