import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Dashboard.scss";
import { TimelinePost } from "./TimelinePost";

export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.location.order.consumer);
        console.log(this.props.history);

        const consumer = this.props.location.order.consumer;
        const consumer_date = this.props.location.order.deliveryDate;

        const retailer = this.props.location.order.retailer;
        const retailer_add = this.props.location.order.retailerAddress;
        const retailer_qual = this.props.location.order.qualityAtRetailer;
        const retailer_date = this.props.location.order.retailProcessDate;

        const manufacturer = this.props.location.order.manufacturer;
        const manufacturer_add = this.props.location.order.manufacturerAddress;
        const manufacturer_date = this.props.location.order
            .manufactureProcessDate;
        const manufacturer_qual = this.props.location.order
            .qualityAtManufacturer;

        const wholesaler = this.props.location.order.wholesaler;
        const wholesaler_date = this.props.location.order.wholesaleProcessDate;
        const wholesaler_add = this.props.location.order.wholesalerAddress;
        const wholesaler_qual = this.props.location.order.qualityAtWholeSaler;

        console.log(consumer);
        console.log(retailer);
        console.log(wholesaler);
        console.log(manufacturer);

        if (consumer && retailer && wholesaler && manufacturer) {
            return (
                <div className="bg">
                    <div className="container py-2">
                        <h1 className="font-weight-dark text-center py-3">
                            {this.props.location.order.foodItem} Transaction
                        </h1>
                    </div>
                    <TimelinePost
                        name={manufacturer}
                        address={manufacturer_add}
                        date={manufacturer_date}
                        qual={manufacturer_qual}
                    />
                    <TimelinePost
                        name={wholesaler}
                        date={wholesaler_date}
                        address={wholesaler_add}
                        qual={wholesaler_qual}
                    />
                    <TimelinePost
                        name={retailer}
                        address={retailer_add}
                        date={retailer_date}
                        qual={retailer_qual}
                    />
                    <TimelinePost
                        name={consumer}
                        consdateumer_date={consumer_date}
                    />
                </div>
            );
        }

        if (retailer & wholesaler & manufacturer) {
            return (
                <div className="bg">
                    <div className="container py-2">
                        <h1 className="font-weight-dark text-center py-3">
                            {this.props.location.order.foodItem} Transaction
                        </h1>
                        <TimelinePost
                            name={manufacturer}
                            address={manufacturer_add}
                            date={manufacturer_date}
                            qual={manufacturer_qual}
                        />
                        <TimelinePost
                            name={wholesaler}
                            date={wholesaler_date}
                            address={wholesaler_add}
                            qual={wholesaler_qual}
                        />
                        <TimelinePost
                            name={retailer}
                            address={retailer_add}
                            date={retailer_date}
                            qual={retailer_qual}
                        />
                    </div>
                </div>
            );
        }

        if (manufacturer & wholesaler) {
            return (
                <div className="bg">
                    <div className="container py-2">
                        <h1 className="font-weight-dark text-center py-3">
                            {this.props.location.order.foodItem} Transaction
                        </h1>
                        <TimelinePost
                            name={manufacturer}
                            address={manufacturer_add}
                            date={manufacturer_date}
                            qual={manufacturer_qual}
                        />
                        <TimelinePost
                            name={wholesaler}
                            address={wholesaler_date}
                            address={wholesaler_add}
                            qual={wholesaler_qual}
                        />
                    </div>
                </div>
            );
        }

        if (manufacturer) {
            return (
                <div className="bg">
                    <div className="container py-2">
                        <h1 className="font-weight-dark text-center py-3">
                            {this.props.location.order.foodItem} Transaction
                        </h1>

                        <TimelinePost
                            name={manufacturer}
                            address={manufacturer_add}
                            date={manufacturer_date}
                            qual={manufacturer_qual}
                        />
                    </div>
                </div>
            );
        }
    }
}

///
// export const Dashboard = (props) => {
//     console.log(props);
//     return (
//         <div classNameName="section-dashboard" id="timeline-content">
//             <h1 classNameName="header_h1">
//                 {" "}
//                 {props.location.order.foodItem}# Chain Flow
//             </h1>

//             <ul classNameName="timeline">
//                 <li
//                     classNameName="event"
//                     data-date={props.location.order.deliveryDate}
//                 >
//                     <h3>{props.location.order.wholesaler}</h3>
//                     <p>{props.location.order.wholesalerAddress}</p>
//                 </li>
//                 <li
//                     classNameName="event"
//                     data-date={props.location.order.wholesaleProcessDate}
//                 >
//                     <h3>{props.location.order.retailer}</h3>
//                     <p>{props.location.order.retailerAddress} 📣</p>
//                     <p>{props.location.order.qualityAtRetailer} </p>
//                 </li>
//                 <li
//                     classNameName="event"
//                     id="date"
//                     data-date={props.location.order.manufactureProcessDate}
//                 >
//                     <h3>{props.location.order.manufacturer}</h3>
//                     <p>{props.location.order.manufacturerAddress} 📣</p>
//                     <p>{props.location.order.qualityAtManufacturer} </p>
//                 </li>

//                 <li
//                     classNameName="event"
//                     data-date={props.location.order.wholesaleProcessDate}
//                 >
//                     <h3>{props.location.order.wholesaler}</h3>
//                     <p>{props.location.order.wholesalerAddress} 📣</p>
//                     <p>{props.location.order.qualityAtWholeSaler}</p>
//                 </li>
//             </ul>
//         </div>
//     );
// };

/* <div className="row">
<div className="col-auto text-center flex-column d-none d-sm-flex">
    <div className="row h-50">
        <div className="col border-right">&nbsp;</div>
        <div className="col">&nbsp;</div>
    </div>
    <h5 className="m-2">
        <span className="badge badge-pill bg-success">
            &nbsp;
        </span>
    </h5>
    <div className="row h-50">
        <div className="col border-right">&nbsp;</div>
        <div className="col">&nbsp;</div>
    </div>
</div>
<div className="col py-3">
    <div className="card border-success shadow">
        <div className="card-body">
            <div className="float-right text-success">
                Tue, Jan 10th 2019 8:30 AM
            </div>
            <h4 className="card-title text-success">
                Day 2 Sessions
            </h4>
            <p className="card-text">
                Sign-up for the lessons and speakers that
                coincide with your course syllabus. Meet and
                greet with instructors.
            </p>
            <button
                className="btn btn-sm btn-outline-secondary"
                type="button"
                data-target="#t2_details"
                data-toggle="collapse"
            >
                Show Details ▼
            </button>
            <div className="collapse border" id="t2_details">
                <div className="p-2 text-monospace">
                    <div>08:30 - 09:00 Breakfast in CR 2A</div>
                    <div>
                        09:00 - 10:30 Live sessions in CR 3
                    </div>
                    <div>10:30 - 10:45 Break</div>
                    <div>
                        10:45 - 12:00 Live sessions in CR 3
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div> */
