import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Signup } from "./pages/Signup";
import { Dashboard } from "./pages/Dashboard";
import "./App.scss";

function App() {
  return (
    <Router>
      <React.Fragment>
        <div className="container jumbo">
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
