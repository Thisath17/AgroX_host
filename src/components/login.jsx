import React, {Component} from "react";
import {Link} from "react-router-dom";
import {auth} from "../fireBase";
import UserDataService from "./service/userSevice";

class login extends Component {
    state = {
        email: "",
        password: "",
    };

    render() {
        return (
            <section
                style={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div className="login-box ">
                    <div className="card card-outline card-primary">
                        <div className="card-header text-center">
                            <a href="" className="h1">
                                <b>Agro</b>X
                            </a>
                        </div>
                        <div className="card-body">
                            <p className="login-box-msg">
                                Sign in to start your session
                            </p>
                            <form action="">
                                <div className="input-group mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        onChange={(event) => {
                                            this.setState({email: event.target.value});
                                        }}
                                    />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        onChange={(event) => {
                                            this.setState({
                                                password: event.target.value,
                                            });
                                        }}
                                    />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                        <div className="icheck-primary">
                                            <input type="checkbox" id="remember"/>
                                            <label htmlFor="remember">Remember Me</label>
                                        </div>
                                    </div>
                                    {/* /.col */}
                                    <div className="col-4">
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-block"
                                            onClick={this.handleLogin}
                                        >
                                            Sign In
                                        </button>
                                    </div>
                                    {/* /.col */}
                                </div>
                            </form>
                            <p className="mb-0">
                                <Link to="/registrationForm">
                                    <a className="text-center">
                                        Register a new membership
                                    </a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    handleLogin = (e) => {
        e.preventDefault();
        console.log(this.state.email, this.state.password);
        auth.signInWithEmailAndPassword(
            this.state.email,
            this.state.password
        )
            .then((user) => {
                console.log(user.user.email, "this is user");
                ///////////////
                let userRole = "";
                let userName = "";
                UserDataService.getAll().on("value", snapshot => {
                    snapshot.forEach(snap => {
                        if (snap.val().email === user.user.email) {
                            userRole = (snap.val().role);
                            userName = snap.val().email;
                        }
                    });
                    console.log(userRole);
                    localStorage.setItem('userName', userName);
                    if (userRole === "Farmer") {
                        this.props.history.push("/farmerForm");
                    } else {
                        this.props.history.push("/sellerForm");
                    }
                })
                ////////////////
            })
            .catch((err) => {
                alert("Wrong username or password!")
                console.log(err);
            });
        //   this.props.history.push("/farmerForm");
    };
}

export default login;
