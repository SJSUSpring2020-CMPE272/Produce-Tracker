import React from "react";
import { Link } from "react-router-dom";
import "./Signup.scss";
import { Dashboard } from "./Dashboard";

export class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: '',
      order_details: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
      .then(response => response.json())
      .then(state => this.setState(state));
  }

  render() {
    return (
  <div class="section-about">
    <div class="u-center-text u-margin-bottom-6">
      <h2 class="heading-secondary">Produce Tracker: Secure Storage!</h2>
    </div>
    <div class="row">
      <div class="col-1-of-2">
        <h3 class="heading-about u-margin-bottom-6">
          Retreive your order!
        </h3>
        <div class="wrapper fadeInDown">
          <div id="formContent">
            <h2 class="active"> Enter Order ID </h2>
            <form onSubmit={this.handleSubmit}>
              <input type="text" 
                      id="order" 
                      class="fadeIn second"
                      value={this.state.order}
                      onChange={this.handleChange} />
              <Link to="/dashboard">
              <input type="submit" class="fadeIn fourth" />
              </Link>
            </form>
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
    )
  
  }
}

