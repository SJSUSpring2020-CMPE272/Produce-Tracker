import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Signup.scss";
import axios from 'axios';

export class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order_details: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // const history = useHistory();
  }

  handleChange(event) {
    this.setState({ order_details: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.get(`http://localhost:8081/getOrder?key=${this.state.order_details}`)
      .then(res => {
        // console.log("response",res)
        const order = {
          ...res.data[0].Record, 
          orderId: this.state.order_details
        };
        this.props.history.push({pathname: '/dashboard', order: order});
      })
      .catch(err => {
        console.log(err)
      });
      };

  render() {
    console.log(this)
    console.log(this.props.history)
    return (
  <div className="section-about">=
    <div className="u-center-text u-margin-bottom-6">
      <h2 className="heading-secondary">Produce Tracker: Secure Storage!</h2>
    </div>
    <div className="row">
      <div className="col-1-of-2">
        <h3 className="heading-about u-margin-bottom-6">
          Retreive your order!
        </h3>
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <h2 className="active"> Enter Order ID </h2>
              <input 
                      type="text" 
                      className="fadeIn second field"
                      value={this.state.order_details}
                      onChange={(event) => this.handleChange(event)} 
                       />
                <button 
                       className="field fadeIn fourth"
                       onClick={ (event) => this.handleSubmit(event)}
                       > Submit </button>
          </div>
        </div>
      </div>
      <div className="col-1-of-2">
        <div className="composition">
          <img
            src="blockchain-online.jpeg"
            alt="Photo 1"
            className="composition__photo composition__photo--p1"
          />
          <img
            src="blockchain-supply-chain.png"
            alt="Photo 2"
            className="composition__photo composition__photo--p2"
          />
        </div>
      </div>
    </div>
  </div>
    )
  
  }
}

