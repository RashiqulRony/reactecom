import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Master from "./layouts/admin/Master";
import Home from "./pages/frontend/Home";
import Login from "./pages/frontend/auth/Login";
import Register from "./pages/frontend/auth/Register";


function App() {
  return (
      <div className="App">
          <Router>
              <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                  <Route path="/admin" name="Admin" render={(props) => <Master {...props} /> } />
              </Switch>
          </Router>
      </div>
  );
}

export default App;
