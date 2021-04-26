import React, {Component} from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import DashboardSeller from "../components/seller/dashboardSeller";
import Table from "../components/seller/tblDetail"
import Mode1 from "../components/seller/orderModel"

export default class sellerForm extends Component {
    render() {
        return (
            <div>
                <Header/>


                <DashboardSeller/>
                <Footer/>
            </div>
        );
    }
}
