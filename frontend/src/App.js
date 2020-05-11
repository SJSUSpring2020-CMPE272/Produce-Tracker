// import React from "react";
// import { Router, Route, Switch } from "react-router-dom";
// import { Home } from "./pages/Home";
// import { SearchOrder } from "./pages/SearchOrder";
// import  NewProduceForm  from "./pages/NewProduceForm";
// import NewTimeLine from "./pages/NewUI/NewTimeLine"

// import  {Dashboard}  from "./pages/Dashboard";
// import  NewDashboard  from "./pages/NewUI/NewDashboard";

// import  SignIn  from "./pages/NewUI/sign-in";
// import { createBrowserHistory } from "history";
// import "./App.scss";

// function App() {
//     const history = createBrowserHistory();

//     return (
//         <Router history={history}>
//             <div>
//                 <Switch>
//                     <Route exact path="/" component={Home} />
//                     <Route exact path="/searchorder" component={SearchOrder} />
//                     <Route exact path="/timeline" component={NewTimeLine} />
//                     <Route exact path="/signin" component={SignIn} />
//                     <Route exact path="/newProduce" component={NewProduceForm} />
//                     <Route
//                         exact
//                         path="/dashboard"
//                         component={NewDashboard}
//                     />
//                 </Switch>
//             </div>
//         </Router>
//     );
// }

// export default App;


import React, { Component } from 'react';
import './App.css';
import Main from './pages/NewUI/Main';
import {BrowserRouter , Route , Redirect} from 'react-router-dom';
import  SignIn  from "./pages/NewUI/sign-in";


//App Component
class App extends Component {
  render() {
    let mainContent = null;
    if(localStorage.getItem('id')){
      mainContent = <Main/>
    }
    else{
      mainContent = <Route exact path="/signin" component={SignIn} />
    }
    return (
      //Use Browser Router to route to different pages
      <BrowserRouter>
        <div>
        <Route exact path="/" render={() => <Redirect to="/signin" />} />  
          {mainContent}
        </div>
      </BrowserRouter>
    );
  }
}
//Export the App component so that it can be used in index.js
export default App;
