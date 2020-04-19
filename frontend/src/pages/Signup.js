import React from "react";
import { Link } from "react-router-dom";
import "./Signup.scss";

export const Signup = () => (
  <div class="section-about">
    <div class="u-center-text u-margin-bottom-6">
      <h2 class="heading-secondary">Welcome to my Portfolio!</h2>
    </div>
    <div class="row">
      <div class="col-1-of-2">
        <h3 class="heading-about u-margin-bottom-6">
          Welcome! Sign In Using G Mail!
        </h3>
        <form className="signup-form">
          <div className="form-group row p-1">
            <label for="inputEmail3" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3" />
            </div>
          </div>
          <div className="form-group row p-1">
            <label for="inputPassword3" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="mx-auto">
              <Link to="/dashboard">
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
      <div class="col-1-of-2">
        <div class="composition">
          <img
            src="blockchain-online.jpeg"
            alt="Photo 1"
            class="composition__photo composition__photo--p1"
          />
          <img
            src="blockchain-supply-chain.png"
            alt="Photo 2"
            class="composition__photo composition__photo--p2"
          />
        </div>
      </div>
    </div>
  </div>
);
