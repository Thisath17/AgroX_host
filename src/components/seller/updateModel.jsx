import React, {Component} from "react";
import SellerDataService from "../service/sellerService"

import {Button, Form, Modal} from "react-bootstrap"

export default class orderModel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vegitable: '',
            maxStock: 0,
            avbStock: 0,
            pricePerKg: 0,
        };
        console.log(this.props.detail)
        this.onChangevegetable = this.onChangevegetable.bind(this)
        this.onChangeMaxStock = this.onChangeMaxStock.bind(this);
        this.onChangeAvbStock = this.onChangeAvbStock.bind(this);
        this.onChangePrivePerKg = this.onChangePrivePerKg.bind(this);

        this.setState({
            vegitable: this.props.detail.vigitable,
            maxStock: this.props.detail.maxStock,
            avbStock: this.props.detail.avbStock,
            pricePerKg: this.props.detail.pricePerKg,
        })
    }

    componentDidMount() {
        this.setState({
            vegitable: this.props.detail.vigitable,
            maxStock: this.props.detail.maxStock,
            avbStock: this.props.detail.avbStock,
            pricePerKg: this.props.detail.pricePerKg,
        })
    }

    renderData = () => {
        this.setState({
            vegitable: this.props.detail.vigitable,
            maxStock: this.props.detail.maxStock,
            avbStock: this.props.detail.avbStock,
            pricePerKg: this.props.detail.pricePerKg,
        })
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

    updateOrder() {

        let data = {
            username: localStorage.getItem("userName"),
            vegitable: this.state.vegitable,
            maxStock: this.state.maxStock,
            avbStock: this.state.avbStock,
            pricePerKg: this.state.pricePerKg,

        };
// const a=data.key
//         console.log(a)
        SellerDataService.update(this.props.detail.id, data)
            .then(() => {
                console.log("Update item successfully!");
                alert("Update item successfully!");
                this.modelClose();
            })
            .catch((e) => {
                console.log(e);
                alert("something went wrong!");
            });


    }


    render() {
        console.log(this.props.detail, "iubawifuehweui")
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        UPDATE ORDER
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Vegitable</Form.Label>
                            <Form.Control require type="text" placeholder="Update Vegetable here"
                                          value={this.state.vegitable} onChange={this.onChangevegetable}/>
                            <Form.Text className="text-muted">
                                Please update your vegitable name here.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Max Stock</Form.Label>
                            <Form.Control require type="number" placeholder="Update Max Stock here"
                                          value={this.state.maxStock} onChange={this.onChangeMaxStock}/>
                            <Form.Text className="text-muted">
                                Update your max Stock you need.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Available Stock</Form.Label>
                            <Form.Control require type="number" placeholder="Update lable Stock here"
                                          value={this.state.avbStock} onChange={this.onChangeAvbStock}/>
                            <Form.Text className="text-muted">
                                Update your available Stock here.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Price per-KG</Form.Label>
                            <Form.Control require type="number" placeholder="Update Price Per Kg here"
                                          value={this.state.pricePerKg} onChange={this.onChangePrivePerKg}/>
                            <Form.Text className="text-muted">
                                Update price per KG.
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={() =>
                        this.updateOrder()
                        // console.log("updated")
                    }>
                        Update Order
                    </Button>
                    <Button btn-danger onClick={() => {
                        this.props.onHide();
                        this.setState({
                            vegitable: '',
                            maxStock: 0,
                            avbStock: 0,
                            pricePerKg: 0,
                        });
                    }}>Close</Button>

                </Modal.Footer>
            </Modal>
        );


    }
}


