import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

export const Home = () => (
    <div className="header">
        <div className="header__text-box">
            <div className="heading-primary">
                <p className="heading-primary--main">Produce-Tracker</p>
                <p className="heading-primary--sub">Welcome {"Admin"}</p>
            </div>
            <Link to="/searchorder">
                <button className="home-main-btn">Retreive Order</button>
            </Link>
            <Link to="/newProduce">
                <button className="home-main-btn">Create Order</button>
            </Link>
        </div>
    </div>
);
