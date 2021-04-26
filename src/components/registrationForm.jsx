import React, {Component} from "react";
import {auth} from "../fireBase";
import {Link} from "react-router-dom";
import UserDataService from "./service/userSevice";

export default class registerForm extends Component {
    state = {
        role: "Farmer",
        fulName: "",
        email: "",
        password: "",
        passwordRep: "",
    };

    render() {
        return (
            <section
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                }}
            >
                <div className="register-box">
                    <div className="register-logo">
                        <h2>
                            Agro<b>X</b>
                        </h2>
                    </div>
                    <div className="card">
                        <div className="card-body register-card-body">
                            <p className="login-box-msg">Register a new membership</p>
                            <form action="">
                                <div className="input-group mb-3">
                                    <input
                                        value={this.state.fulName}
                                        type="text"
                                        onChange={(event) => {
                                            this.setState({fulName: event.target.value});
                                        }}
                                        className="form-control"
                                        placeholder="Full name"
                                    />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-user"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input
                                        value={this.state.email}
                                        type="email"
                                        onChange={(event) => {
                                            this.setState({email: event.target.value});
                                        }}
                                        className="form-control"
                                        placeholder="Email"
                                    />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input
                                        value={this.state.password}
                                        type="password"
                                        onChange={(event) => {
                                            this.setState({
                                                password: event.target.value,
                                            });
                                        }}
                                        className="form-control"
                                        placeholder="Password"
                                    />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input
                                        value={this.state.passwordRep}
                                        type="password"
                                        onChange={(event) => {
                                            this.setState({
                                                passwordRep: event.target.value,
                                            });
                                        }}
                                        className="form-control"
                                        placeholder="Retype password"
                                    />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-6 mt-2 mb-2">
                                        <h6>Role</h6>
                                        <div className="row">
                                            <div className="col">
                                                <select
                                                    value={this.state.role}
                                                    onChange={(e) => {
                                                        let {value} = e.target;
                                                        this.setState({role: value});
                                                    }}
                                                    id="dropdown-item-button"
                                                    title="Role"
                                                >
                                                    <option value="Farmer">Farmer</option>
                                                    <option value="Seller">Seller</option>
                                                </select>
                                            </div>
                                            <div className="col">
                                                <span>{this.state.role}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col"></div>
                                </div>

                                <div className="row">
                                    <div className="col-8">
                                        <div className="icheck-primary">
                                            <input
                                                type="checkbox"
                                                id="agreeTerms"
                                                name="terms"
                                                defaultValue="agree"
                                            />
                                            <label htmlFor="agreeTerms">
                                                I agree to the <a href="#">terms</a>
                                            </label>
                                        </div>
                                    </div>
                                    {/* /.col */}
                                    <div className="col-4">
                                        <button
                                            type="submit"
                                            onClick={this.onRegister}
                                            className="btn btn-primary btn-block"
                                        >
                                            Register
                                        </button>
                                    </div>
                                    {/* /.col */}
                                </div>
                            </form>
                            <Link to="/">
                                <a href="" className="text-center">
                                    I already have a membership
                                </a>
                            </Link>
                        </div>
                        {/* /.form-box */}
                    </div>
                    {/* /.card */}
                </div>
            </section>
        );
    }

    onRegister = (e) => {
        e.preventDefault();
        const fulName = this.state.fulName;
        const email = this.state.email;
        const password = this.state.password;
        const passwordRep = this.state.passwordRep;
        const role = this.state.role;
        if (password === passwordRep) {
            this.signInNewUser(email, password, fulName, role);
        }
        console.log(this.state.fulName, this.state.email, this.state.password, this.state.passwordRep, this.state.role);
    };

    createNewUser(user) {
        console.log(user, " create new user");
        UserDataService.create(user)
            .then(() => {
                alert('User registration Successfully!');
                this.setState({
                    role: "Farmer",
                    fulName: "",
                    email: "",
                    password: "",
                    passwordRep: "",
                });
            })
            .catch((e) => {
                console.log(e);
            });
    }

    signInNewUser(email, password, fulName, role) {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((user) => {
                console.log(user);
                this.createNewUser({fulName, email, role});
                alert('User Registration Successfully!');
                console.log("create user successfully")
                this.props.history.push("/")
            })
            .catch((err) => {
                console.log(err);
                alert("Something went Wrong")
            });
    }
}
