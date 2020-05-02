import React from "react";
import "./TimelinePost.scss";

export const TimelinePost = (props) => (
    <div className="row">
        <div className="col-auto text-center flex-column d-none d-sm-flex">
            <div className="row h-50">
                <div className="col">&nbsp;</div>
            </div>
            <h5 className="m-2">
                <span className="badge badge-pill bg-light border">&nbsp;</span>
            </h5>
            <div className="row h-50">
                <div className="col border-right">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>
        </div>

        <div className="col py-3">
            <div className="card">
                <div className="card-body">
                    <div className="float-right text-muted">
                        {props.man_date}
                    </div>
                    <h4 className="card-title text-muted">{props.name}</h4>
                    <p className="card-text">
                        It was purchased from {props.name} at {props.date}
                        <br></br>
                        Address: {props.addr}
                        <br></br>
                        The quality of the product {props.qual}
                    </p>
                </div>
            </div>
        </div>
    </div>
);
