import React from "react";
import "./TimelinePost.scss";

export const TimelinePost = (props) => (
    <div className="row">
        <div className="col-auto text-center flex-column d-none d-sm-flex">
            <div className="row h-50">
                <div className="col">&nbsp;</div>
            </div>
            <h5 className="m-2">
                {(() => {
                    switch (props.qual) {
                        case "Good":
                            return (
                                <span className="badge badge-pill bg-success border">
                                    &nbsp;
                                </span>
                            );
                        case "Excellent":
                            return (
                                <span className="badge badge-pill bg-success border">
                                    &nbsp;
                                </span>
                            );
                        case "Bad":
                            return (
                                <span className="badge badge-pill bg-warning border">
                                    &nbsp;
                                </span>
                            );
                        case "Infected":
                            return (
                                <span className="badge badge-pill bg-danger border">
                                    &nbsp;
                                </span>
                            );
                        default:
                            return (
                                <span className="badge badge-pill bg-success border">
                                    &nbsp;
                                </span>
                            );
                    }
                })()}
            </h5>
            <div className="row h-50">
                <div className="col border-right">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>
        </div>

        <div className="col py-3">
            {(() => {
                switch (props.type) {
                    case "manufacturer":
                        return (
                            <div className="card border-primary">
                                <div className="card-body">
                                    <div className="card-font-size-header float-right text-muted">
                                        The manufacturer {props.man_date}
                                    </div>
                                    <h4 className="card-title text-muted">
                                        {props.name}
                                    </h4>
                                    <p className="card-text card-font-size-text">
                                        The raw food was processed on{" "}
                                        {props.raw} It reached {props.name} at
                                        this time {props.date}
                                        <br></br>
                                        Address: {props.address}
                                        <br></br>
                                        The quality of the product {props.qual}
                                    </p>
                                </div>
                            </div>
                        );
                    case "wholesaler":
                        return (
                            <div className="card border-primary">
                                <div className="card-body">
                                    <div className="card-font-size-header float-right text-muted">
                                        The Wholesaler {props.man_date}
                                    </div>
                                    <h4 className="card-title text-muted">
                                        {props.name}
                                    </h4>
                                    <p className="card-text card-font-size-text">
                                        It reached {props.name} at this time
                                        {props.date}
                                        <br></br>
                                        Address: {props.address}
                                        <br></br>
                                        The quality of the product {props.qual}
                                    </p>
                                </div>
                            </div>
                        );
                    case "logistic":
                        return (
                            <div className="card border-primary">
                                <div className="card-body">
                                    <div className="card-font-size-header float-right text-muted">
                                        The Logistic Transportation
                                        {props.man_date}
                                    </div>
                                    <h4 className="card-title text-muted">
                                        {props.name}
                                    </h4>
                                    <p className="card-text card-font-size-text">
                                        It reached {props.name} at this time
                                        {props.date}
                                        <br></br>
                                        Address: {props.address}
                                        <br></br>
                                        The quality of the product {props.qual}
                                    </p>
                                </div>
                            </div>
                        );
                    case "retailer":
                        return (
                            <div className="card border-primary">
                                <div className="card-body">
                                    <div className="card-font-size-header float-right text-muted">
                                        The retailer {props.man_date}
                                    </div>
                                    <h4 className="card-title text-muted">
                                        {props.name}
                                    </h4>
                                    <p className="card-text card-font-size-text">
                                        It reached {props.name} at this time
                                        {props.date}
                                        <br></br>
                                        Address: {props.address}
                                        <br></br>
                                        The quality of the product {props.qual}
                                    </p>
                                </div>
                            </div>
                        );
                    case "consumer":
                        return (
                            <div className="card border-primary">
                                <div className="card-body">
                                    <div className="card-font-size-header float-right text-muted">
                                        The consumer {props.man_date}
                                    </div>
                                    <h4 className="card-title text-muted">
                                        {props.name}
                                    </h4>
                                    <p className="card-text card-font-size-text">
                                        {props.name} purchased part of the
                                        product on {props.date}
                                    </p>
                                </div>
                            </div>
                        );
                    default:
                        return <h1>No Data Found</h1>;
                }
            })()}
        </div>
    </div>
);

// export const TimelinePost = (props) => (
//     <div className="row">
//         <div className="col-auto text-center flex-column d-none d-sm-flex">
//             <div className="row h-50">
//                 <div className="col">&nbsp;</div>
//             </div>
//             <h5 className="m-2">
//                 {(() => {
//                     switch (props.qual) {
//                         case "Good":
//                             return (
//                                 <span className="badge badge-pill bg-success border">
//                                     &nbsp;
//                                 </span>
//                             );
//                         case "Excellent":
//                             return (
//                                 <span className="badge badge-pill bg-success border">
//                                     &nbsp;
//                                 </span>
//                             );
//                         case "Bad":
//                             return (
//                                 <span className="badge badge-pill bg-warning border">
//                                     &nbsp;
//                                 </span>
//                             );
//                         case "Infected":
//                             return (
//                                 <span className="badge badge-pill bg-danger border">
//                                     &nbsp;
//                                 </span>
//                             );
//                         default:
//                             return (
//                                 <span className="badge badge-pill bg-success border">
//                                     &nbsp;
//                                 </span>
//                             );
//                     }
//                 })()}
//             </h5>
//             <div className="row h-50">
//                 <div className="col border-right">&nbsp;</div>
//                 <div className="col">&nbsp;</div>
//             </div>
//         </div>

//         <div className="col py-3">
//             <div className="card border-success">
//                 <div className="card-body">
//                     <div className="card-font-size-header float-right text-muted">
//                         {props.man_date}
//                     </div>
//                     <h4 className="card-title text-muted">Role {props.name}</h4>
//                     <p className="card-text card-font-size-text">
//                         It reached {props.name} at this time {props.date}
//                         <br></br>
//                         Address: {props.address}
//                         <br></br>
//                         The quality of the product {props.qual}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     </div>
// );
