import React, {Component} from "react";

class model extends Component {
    state = {};

    render() {
        return (
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Default Modal</h4>
                    <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>One fine body…</p>
                </div>
                <div className="modal-footer justify-content-between">
                    <button
                        type="button"
                        className="btn btn-default"
                        data-dismiss="modal"
                    >
                        Close
                    </button>
                    <button type="button" className="btn btn-primary">
                        Save changes
                    </button>
                </div>
            </div>
        );
    }
}

export default model;
