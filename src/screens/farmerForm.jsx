import React, {Component} from "react";
import Header from "../components/farmer/farmerHeader";
// import Header from "../components/header";
import Footer from "../components/footer";
import DashboardFarmer from "../components/farmer/dashboardFarmer";
import MachineLerning from "../components/farmer/machineLerning";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

export default class farmerForm extends Component {
    constructor() {
        super();
        console.log("constructor in component");
        // Db.collection('schools').get().then((snapshot) => {
        //     snapshot.docs.forEach(doc => {
        //         console.log(doc);
        //     })
        // })
    }

    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Switch>
                        <Route
                            path="/farmerForm/"
                            exact
                            component={DashboardFarmer}
                        />
                        <Route
                            path="/farmerForm/machineLerning"
                            exact
                            component={MachineLerning}
                        />
                    </Switch>

                    <Footer/>
                </div>
            </Router>
        );
    }
}
