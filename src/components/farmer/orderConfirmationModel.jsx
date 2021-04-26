import React, {Component} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import OrderDetailService from "../service/orderDetailService"
import SellerDataService from "../service/sellerService";

export default class orderConfirmationModel extends Component {
    state = {
        amount: 0,
        warning: ""
    };

    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Order Confiremation
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3 style={{color: "red"}}>This Action Is Cannot Be Undone .{this.props.vegitable}</h3>
                    <h5>Plese Enter Amout To Deliver</h5>
                    <input
                        type="number"
                        onChange={(event) => {
                            this.setState({
                                amount: event.target.value,
                            });
                        }}
                        placeholder="Amount"
                    />
                    <h6 className={"m-0"}>{this.state.warning}</h6>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {
                        const availableAmount = this.props.detail.maxStock - this.props.detail.avbStock;
                        console.log(this.props.detail);
                        console.log(availableAmount, "available amount");
                        console.log(this.state.amount, "amount");

                        if (this.state.amount <= availableAmount) {
                            console.log('order can be placed');
                            this.placeOrder({
                                sellerOrderKey: this.props.detail.sellerOrderKey,
                                sellerName: this.props.detail.sellerName,
                                farmerID: this.props.detail.farmerID,
                                amount: this.state.amount,
                            });
                        } else {
                            console.log('order cannot be placed!');
                            alert('this amount is higher than our max  stock \n please decrease your amount!');
                        }

                    }}>Accept Order</Button>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    placeOrder(newOrder) {
        console.log(newOrder, "this is new order object");
        OrderDetailService.create(newOrder)
            .then(() => {
                this.updateSellerOrderDetail()
                console.log("Created new item successfully!");
                this.modelClose();
            })
            .catch((e) => {
                alert('something went wrong');
                console.log(e);
            });
    }

    modelClose() {
        alert('Created new item successfully!');
        this.props.toHide();
    }

    updateSellerOrderDetail() {
        const newAvailableAmount = parseInt(this.props.detail.avbStock) + parseInt(this.state.amount);
        console.log(this.props.detail.sellerName, "sellerName");
        console.log(this.props.detail.vigitable, "vegitable");
        console.log(this.props.detail.maxStock, "maxStock");
        console.log(newAvailableAmount, "newAvailableAmount");
        console.log(this.props.detail.pricePerKg, "pricePerKg");
        console.log(this.props.detail.sellerOrderKey, "sellerOrderKey")

        let data = {
            username: this.props.detail.sellerName,
            vegitable: this.props.detail.vigitable,
            maxStock: this.props.detail.maxStock,
            avbStock: newAvailableAmount,
            pricePerKg: this.props.detail.pricePerKg,

        };
        SellerDataService.update(this.props.detail.sellerOrderKey, data)
            .then(() => {
                console.log("Update item successfully!");
            })
            .catch((e) => {
                console.log(e);
            });
    }
}

