import React, {Component} from "react";
import SellerDetailsTable from '../farmer/sellerDetailsTable';
import OrderConfirmationModel from "./orderConfirmationModel";
import {Button, ButtonToolbar} from "react-bootstrap";

export default class dashboardFarmer extends Component {
    state = {
        username: localStorage.getItem('userName'),
    }

    render() {
        return (
            <div>
                <div className="content-wrapper ml-0">
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row">
                                <section className="col">
                                    <h5 style={{textAlign: "right"}}>{this.state.username}</h5>
                                </section>
                            </div>
                            <div className="row mt-2">
                                <section className="col">
                                    <SellerDetailsTable/>
                                </section>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}
