import React from "react";
import { Link } from "react-router-dom";
import "./Signup.scss";

export const Signup = () => (
  <div class="section-about">
    <div class="u-center-text u-margin-bottom-6">
      <h2 class="heading-secondary">Produce Tracker: Secure Storage!</h2>
    </div>
    <div class="row">
      <div class="col-1-of-2">
        <h3 class="heading-about u-margin-bottom-6">
          Welcome! Sign In Using G Mail!
        </h3>
        <div class="wrapper fadeInDown">
          <div id="formContent">
            <h2 class="active"> Sign In </h2>
            <h2 class="inactive underlineHover">Sign Up </h2>
            <form>
              <input type="text" id="login" class="fadeIn second" />
              <input type="text" id="password" class="fadeIn third" />
              <input type="submit" class="fadeIn fourth" />
            </form>

            <div class="formFooter">
              <a class="underlineHover" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
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
