import React, {Component} from "react";

export default class footer extends Component {
    render() {
        return (
            <div>
                <footer className="main-footer  ml-0">
                    <strong>Copyright © 2021 AgroX.tec </strong>
                    All rights reserved.
                    <div className="float-right d-none d-sm-inline-block">
                        <b>Version</b> 1.0.0
                    </div>
                </footer>
            </div>
        );
    }
}
