import React, {Component} from "react";
import {Button, ButtonToolbar} from "react-bootstrap";
import OrderConfirmationModel from "../seller/orderModel";
import SellerDetailsTable from "../seller/tblDetail";

export default class dashboardSeller extends Component {
    state = {
        username: localStorage.getItem("userName"),
        myModel: false,
        setModalShow: false
    }

    render() {
        console.log(this.state.username)
        return (
            <div>
                <div className="content-wrapper ml-0">
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row">
                                <h1 style={{    position:"relative",
                                    right: "-17px"}}>SELLER PAGE</h1>
                            </div>
                            <div className="row">
                                <section className="col">
                                    <ButtonToolbar>
                                        <Button className="btn btn-danger m-2" variant="primary"
                                                onClick={() => this.setState({setModalShow: true})}>
                                            Add Order
                                        </Button>

                                        <OrderConfirmationModel
                                            show={this.state.setModalShow}
                                            onHide={() => this.setState({setModalShow: false})}
                                        />
                                    </ButtonToolbar>

                                </section>
                                <section className="col">
                                    <h5 style={{textAlign: "right"}}>{this.state.username}</h5>
                                </section>
                            </div>
                            <div className="row">
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
