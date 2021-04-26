import React, {Component} from "react";
import {Button, ButtonToolbar} from "react-bootstrap";
import OrderConfirmationModel from "./orderConfirmationModel";
import SellerService from "../service/sellerService";

export default class sellerDetailsTable extends Component {
    state = {
        myModel: false,
        setModalShow: false,
        orderList: [],
        orderObj: {},
        farmerID: localStorage.getItem('userName'),
    }


    HideModel = () => {
        this.setState({setModalShow: false});
    }

    componentDidMount() {
        SellerService.getAll().on("value", snapshot => {
            let orderList = [];
            console.log(orderList)
            console.log("component did mount")
            snapshot.forEach(snap => {
                orderList.push({
                    key: snap.key,
                    sellerName: snap.val().username,
                    vegitable: snap.val().vegitable,
                    maxStock: snap.val().maxStock,
                    avbStock: snap.val().avbStock,
                    pricePerKg: snap.val().pricePerKg
                });
            });
            this.setState({orderList: orderList});
        });
    }

    render() {
        return (
            <div>
                <table className="table table-hover table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">BuyerName</th>
                        <th scope="col">Vegetable</th>
                        <th scope="col">maxStock</th>
                        <th scope="col">availableStock</th>
                        <th scope="col">pricePerKg</th>
                        <th scope="col">Accept Order</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.orderList.map(data => {
                            return (
                                <tr key={data.key} id={data.key}>
                                    <td scope="row">{data.sellerName}</td>
                                    <td>{data.vegitable}</td>
                                    <td>{data.maxStock}</td>
                                    <td>{data.avbStock}</td>
                                    <td>{data.pricePerKg}</td>
                                    <ButtonToolbar>
                                        <Button className="btn btn-danger m-2" variant="primary"
                                                onClick={() => {
                                                    this.setState({setModalShow: true});
                                                    const detailObj = {
                                                        sellerOrderKey: data.key,
                                                        sellerName: data.sellerName,
                                                        farmerID: this.state.farmerID,
                                                        vigitable: data.vegitable,
                                                        maxStock: data.maxStock,
                                                        avbStock: data.avbStock,
                                                        pricePerKg: data.pricePerKg
                                                    };
                                                    this.setState({
                                                        orderObj: detailObj
                                                    })
                                                }}>
                                            Accept Order
                                        </Button>
                                        {console.log('button')}
                                        <OrderConfirmationModel
                                            detail={this.state.orderObj}
                                            show={this.state.setModalShow}
                                            toHide={this.HideModel}
                                            onHide={() => this.setState({setModalShow: false})}
                                        />
                                    </ButtonToolbar>
                                </tr>
                            );
                        })}

                    </tbody>
                </table>
            </div>
        );
    }
}
