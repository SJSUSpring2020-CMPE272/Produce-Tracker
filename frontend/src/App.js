import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <React.Fragment>
        <div className="container jumbo">
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/dashboard" component={Feed} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
