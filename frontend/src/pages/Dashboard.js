import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Dashboard.scss";

export const Dashboard = (props) =>{ 
  console.log(props)
  return (
    <div className="section-dashboard" id="timeline-content">
      <h1 className="header_h1"> { props.location.order.foodItem}# Chain Flow</h1>

      <ul className="timeline">
        <li className="event" data-date={ props.location.order.deliveryDate}>
          <h3>{props.location.order.wholesaler}</h3>
          <p>{props.location.order.wholesalerAddress}</p>
        </li>
        <li className="event" data-date={props.location.order.wholesaleProcessDate}>
          <h3>{props.location.order.retailer}</h3>
          <p>{props.location.order.retailerAddress} 📣</p>  
          <p>{props.location.order.qualityAtRetailer} </p>    
        </li>
        <li className="event" id="date" data-date={props.location.order.manufactureProcessDate}>
        <h3>{props.location.order.manufacturer}</h3>
          <p>{props.location.order.manufacturerAddress} 📣</p>
            <p>{props.location.order.qualityAtManufacturer} </p>      
        </li>
        
        <li className="event" data-date={props.location.order.wholesaleProcessDate}>
          <h3>{props.location.order.wholesaler}</h3>
          <p>{props.location.order.wholesalerAddress} 📣</p> 
  <p>{props.location.order.qualityAtWholeSaler}</p>
        </li>
      </ul>
    </div>
);
}
