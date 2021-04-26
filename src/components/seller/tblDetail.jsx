import React, { Component } from "react";
import {Button, ButtonToolbar} from "react-bootstrap"
import OrderConfirmationModel from "../seller/updateModel";
import SellerService from "../service/sellerService"
import firebase from "../../fireBase";

export default class tblDetail extends Component {
    state = {
        username: localStorage.getItem("userName"),
        myModel: false,
        setModalShow: false,
        sellerlist: [],
        orderObj:{}
    }
    componentDidMount() {
            SellerService.getAll().on("value", snapshot => {
            let sellerlist= [];
            console.log(sellerlist)
            snapshot.forEach(snap => {
                console.log(snap.val().username);
                console.log(this.state.username);
                //condition
                if (snap.val().username === this.state.username) {
                    sellerlist.push({
                        key:snap.key,
                        detail:snap.val()});
                }
            });
            this.setState({sellerlist: sellerlist});
        });
    }

    deleteOrder(id){
        SellerService.delete(id)
            .then(() => {
                console.log("Delete successfully!");
            })
            .catch((e) => {
                console.log(e);
            });
    }

    HideModel = () => {
        this.setState({setModalShow: false});
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
                        <th scope="col">  </th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.sellerlist.map(data => {
                        return (
                            <tr key={data.key}>
                                <th scope="row">{data.detail.username}1</th>
                                <td>{data.detail.vegitable}</td>
                                <td>{data.detail.maxStock}</td>
                                <td>{data.detail.avbStock}</td>
                                <td>{data.detail.pricePerKg}</td>
                                <Button className="btn btn-primary m-2" variant="primary"
                                        onClick={() => {
                                            this.setState({setModalShow: true})
                                            const detailObj = {
                                                id:data.key,
                                                vigitable: data.detail.vegitable,
                                                maxStock: data.detail.maxStock,
                                                avbStock: data.detail.avbStock,
                                                pricePerKg: data.detail.pricePerKg
                                            };
                                            this.setState({
                                                orderObj:detailObj
                                            })
                                        }}>
                                    Edit Order
                                </Button>

                                <OrderConfirmationModel
                                    detail={this.state.orderObj}
                                    show={this.state.setModalShow}
                                    toHide={this.HideModel}
                                    onHide={() => this.setState({setModalShow: false})}
                                />
                                <Button className="btn btn-danger m-2" variant="primary"
                                        onClick={() => this.deleteOrder(data.key)}>
                                    Delete Order
                                </Button>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}
