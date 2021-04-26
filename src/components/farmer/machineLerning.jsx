import React, {Component} from "react";

class machineLerning extends Component {
    state = {
        vegitableType: '',
        time: '',
        samplePrice:0.0
    };

    loadModelData() {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({vegitableType: this.state.vegitableType, time: this.state.time})
        };

        //api url should change
        fetch('https://reqres.in/api/postshttp://127.0.0.1:5000/predict', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    samplePrice:data.PricePerkilogram //this need to be update according to the model response
                })
            });
    }

    render() {
        return (
            <div style={{height: "81vh"}}>
                <h2 className="ml-3 mb-2">AgroX</h2>
                <h3 className="ml-3 mb-2">Real Time Price Prediction</h3>
                <section className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="ml-2 w-50 p-1"
                                    id="vegitableId"
                                    placeholder="Enter Vegitable Type"
                                    value={this.state.vegitableType}
                                    onChange={(event)=>{
                                        this.setState({
                                            vegitableType:event.target.value
                                        })
                                    }}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="ml-2 w-50 p-1"
                                    id="time"
                                    placeholder="Time"
                                    value={this.state.time}
                                    onChange={(event)=>{
                                        this.setState({
                                            time:event.target.value
                                        })
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button className="btn btn-primary m-2" type="button"
                                        onClick={() => {
                                            this.loadModelData()
                                        }}
                                >
                                    Predict Price
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div
                            className="card card-outline border-light mb-3"
                            style={{maxWidth: "18rem"}}
                        >
                            <div className="card-body">
                                <h5 className="card-title mb-2 font-weight-bold">
                                    Successfully Predicted...
                                </h5>
                                <br/>
                                <label>Predict Price : </label>
                                <span
                                    className="badge p-2 m-2 badge-primary "
                                    style={{fontSize: 18}}
                                >
                                    {this.state.samplePrice}
                        </span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default machineLerning;
