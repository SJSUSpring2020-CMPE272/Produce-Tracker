import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { SearchOrder } from "./pages/SearchOrder";
import { Dashboard } from "./pages/Dashboard";
import { createBrowserHistory } from "history";
import "./App.scss";

function App() {
    const history = createBrowserHistory();

    return (
        <Router history={history}>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/searchorder" component={SearchOrder} />
                    <Route
                        exact
                        path="/dashboard/:orderId"
                        component={Dashboard}
                    />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
