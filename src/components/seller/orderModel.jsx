import React, {Component} from "react";
import SellerDataService from "../service/sellerService"

import {Button, Form, Modal} from "react-bootstrap"

export default class orderModel extends Component {
    constructor(props) {
        console.log(props.detail);
        super(props);
        this.onChangevegetable = this.onChangevegetable.bind(this)
        this.onChangeMaxStock = this.onChangeMaxStock.bind(this);
        this.onChangeAvbStock = this.onChangeAvbStock.bind(this);
        this.onChangePrivePerKg = this.onChangePrivePerKg.bind(this);

        this.state = {
            username: localStorage.getItem("userName"),
            vegitable: "",
            maxStock: "",
            avbStock: "",
            pricePerKg: ""
        };
    }

    onChangevegetable(e) {
        this.setState({
            vegitable: e.target.value,
        });
    }

    onChangeMaxStock(e) {
        this.setState({
            maxStock: e.target.value,
        });
    }

    onChangeAvbStock(e) {
        this.setState({
            avbStock: e.target.value,
        });
    }

    onChangePrivePerKg(e) {
        console.log("per kg")
        this.setState({
            pricePerKg: e.target.value,
        });
    }

    addOrder() {

        let data = {
            username: this.state.username,
            vegitable: this.state.vegitable,
            maxStock: this.state.maxStock,
            avbStock: this.state.avbStock,
            pricePerKg: this.state.pricePerKg,
        };

        SellerDataService.create(data)
            .then(() => {
                console.log("Created new item successfully!");
            })
            .catch((e) => {
                console.log(e);
            });


    }

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
                        ADD Order
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Vegitable</Form.Label>
                            <Form.Control require type="text" placeholder="Enter Vegetable here"
                                          value={this.state.vegitable} onChange={this.onChangevegetable}/>
                            <Form.Text className="text-muted">
                                Please enter your vegitable name here.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Max Stock</Form.Label>
                            <Form.Control require type="number" placeholder="Enter Max Stock here"
                                          value={this.state.maxStock} onChange={this.onChangeMaxStock}/>
                            <Form.Text className="text-muted">
                                Enter your max Stock you need.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Available Stock</Form.Label>
                            <Form.Control type="number" placeholder="Enter Available Stock here"
                                          value={this.state.avbStock} onChange={this.onChangeAvbStock}/>
                            <Form.Text className="text-muted">
                                Enter your available Stock here.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Price per-KG</Form.Label>
                            <Form.Control type="number" placeholder="Enter Price Per Kg here"
                                          value={this.state.pricePerKg} onChange={this.onChangePrivePerKg}/>
                            <Form.Text className="text-muted">
                                Enter price per KG.
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={() => {
                        this.addOrder();
                        this.props.onHide();
                        this.setState({
                            username: localStorage.getItem("userName"),
                            vegitable: "",
                            maxStock: "",
                            avbStock: "",
                            pricePerKg: "",
                        })
                    }}
                    >
                        Add
                        Order
                    < /Button>
                    <Button btn-danger onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );


    }
}


