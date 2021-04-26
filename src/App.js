import SellerForm from "./screens/sellerForm";
import FarmerForm from "./screens/farmerForm";
import Login from "./components/login";
import RegistrationForm from "./components/registrationForm";
// import {BrowserRouter as Router} from "react-router-dom";
// import {Switch, Route} from "react-router-dom";

import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
   return (
       <Router>
          <div className="wrapper">
             <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/registrationForm" exact component={RegistrationForm}/>
                <Route path="/farmerForm" exact component={FarmerForm}/>
                <Route path="/sellerForm" exact component={SellerForm}/>
             </Switch>
          </div>
       </Router>
   );
}

export default App;
