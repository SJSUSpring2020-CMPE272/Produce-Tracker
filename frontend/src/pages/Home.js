import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

export const Home = () => (
  <div class="header">
    <div class="header__text-box">
      <h1 class="heading-primary">
        <span class="heading-primary--main">Produce-Tracker</span>
        <span class="heading-primary--sub">Safe Storage</span>
      </h1>
      <Link to="/signup">
        <a type="submit" href="#" class="btn btn--white btn--animated">
          Sign In
        </a>
      </Link>
    </div>
  </div>
);
