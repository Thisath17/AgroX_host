import React, {Component} from "react";
import {withRouter} from "react-router";
import {auth} from "../fireBase";
import {Link} from "react-router-dom";

class header extends Component {
    render() {
        return (
            <nav className="main-header navbar navbar-expand navbar-white navbar-light ml-0">
                {/* Left navbar links */}
                <ul className="navbar-nav">
                    <li className="nav-item d-none d-sm-inline-block">
                        <Link to="/sellerform">
                            <a className="nav-link">Home</a>
                        </Link>
                    </li>
                </ul>
                {/* Right navbar links */}
                <ul className="navbar-nav ml-auto">
                    {/* Navbar Search */}
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            data-widget="navbar-search"
                            href="#"
                            role="button"
                        >
                            <i className="fas fa-search"/>
                        </a>
                        <div className="navbar-search-block">
                            <form className="form-inline">
                                <div className="input-group input-group-sm">
                                    <input
                                        className="form-control form-control-navbar"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                    <div className="input-group-append">
                                        <button className="btn btn-navbar" type="submit">
                                            <i className="fas fa-search"/>
                                        </button>
                                        <button
                                            className="btn btn-navbar"
                                            type="button"
                                            data-widget="navbar-search"
                                        >
                                            <i className="fas fa-times"/>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>
                    <li>
                        <button
                            className="btn btn-outline-warning"
                            onClick={this.handleLogout}
                        >
                            LogOut
                        </button>
                    </li>
                </ul>
            </nav>
        );
    }

    handleLogout = () => {
        console.log("testing log out");
        this.props.history.push("/");
        auth.signOut();
    };
}

export default withRouter(header);
