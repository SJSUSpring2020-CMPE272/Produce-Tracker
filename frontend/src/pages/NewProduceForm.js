import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router";
import backendServer from "../config";
import "./NewProduceForm.scss";

class NewProduceForm extends Component {
    //call the constructor method
    constructor(props) {
        //Call the constrictor of Super class i.e The Component
        super(props);
        //maintain the state required for this component
        this.state = {
            orderId: "",
            foodItem: "",
            entityName: "",
            entityAddress: "",
            quality: "",
            errorMessagge: null,
            transactionState: 0,
        };
        //Bind the handlers to this className
        this.handleUserInput = this.handleUserInput.bind(this);
        this.submitNewProduce = this.submitNewProduce.bind(this);
        this.submitNewTransaction = this.submitNewTransaction.bind(this);
    }
    //Call the Will Mount to set the auth Flag to false
    componentWillMount() {}
    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

    submitNewProduce = (e) => {
        //prevent page from refresh
        e.preventDefault();
        if (this.state.orderId && this.state.foodItem) {
            let data = {
                orderId: this.state.orderId,
                foodItem: this.state.foodItem,
            };
            console.log(data);
            //set the with credentials to true
            axios.defaults.withCredentials = true;
            //make a post request with the user data
            axios
                .post(`${backendServer}/createRawFood`, data)
                .then((response) => {
                    this.setState({
                        errorMessage: null,
                        transactionState: this.state.transactionState + 1,
                    });
                })
                .catch((ex) => {
                    console.log(ex);
                });
        } else {
            this.setState({
                errorMessage: "ORDER ID & Produce Name Required",
            });
        }
    };
    submitNewTransaction = (e) => {
        //prevent page from refresh
        e.preventDefault();
        if (
            this.state.orderId &&
            this.state.entityName &&
            this.state.entityAddress &&
            this.state.quality
        ) {
            let data = {
                orderId: this.state.orderId,
                entityName: this.state.entityName,
                entityAddress: this.state.entityAddress,
                quality: this.state.quality,
            };
            switch (this.state.transactionState) {
                case 1:
                    data.type = "manufacturer";
                    break;
                case 2:
                    data.type = "wholesaler";
                    break;
                case 3:
                    data.type = "logistics";
                    break;
                case 4:
                    data.type = "retailer";
                    break;
                case 5:
                    data.type = "consumer";
                    break;
            }
            console.log(data);
            //set the with credentials to true
            axios.defaults.withCredentials = true;
            //make a post request with the user data
            axios
                .post(`${backendServer}/changeState`, data)
                .then((response) => {
                    this.setState({
                        entityName: "",
                        entityAddress:
                            this.state.transactionState === 4
                                ? "Not required"
                                : "",
                        quality: "",
                        transactionState: this.state.transactionState + 1,
                        errorMessage: "",
                    });
                })
                .catch((ex) => {
                    console.log(ex);
                });
        } else {
            this.setState({
                errorMessage: "Entity Name , Address & Quality Required",
            });
        }
    };

    render() {
        //redirect based on successful NewProduceForm
        let errorBox = null;
        if (this.state.errorMessage) {
            errorBox = (
                <div className="alert alert-danger">
                    {this.state.errorMessage}
                </div>
            );
        }
        let form = null;
        if (this.state.transactionState === 0) {
            form = (
                <div className="d-flex flex-column justify-content-center text-center">
                    <h2>Create New Produce</h2>
                    <div className="input-group mb-3">
                        <input
                            id="orderId"
                            onChange={this.handleUserInput}
                            type="text"
                            className="form-control"
                            value={this.state.orderId}
                            name="orderId"
                            placeholder="Order ID"
                            aria-describedby="basic-addon1"
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input
                            id="foodItem"
                            onChange={this.handleUserInput}
                            type="text"
                            className="form-control"
                            value={this.state.foodItem}
                            name="foodItem"
                            placeholder="Produce Name"
                        />
                    </div>
                    <button
                        onClick={this.submitNewProduce}
                        className="btn btn-primary"
                    >
                        Add New Produce
                    </button>
                </div>
            );
        } else if (this.state.transactionState === 1) {
            form = (
                <div className="d-flex flex-column justify-content-center text-center">
                    <h2>Manufacturer</h2>
                    <div className="input-group mb-3">
                        <input
                            id="man-name"
                            onChange={this.handleUserInput}
                            type="text"
                            className="form-control"
                            value={this.state.entityName}
                            name="entityName"
                            placeholder="Manufacturer Name"
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input
                            onChange={this.handleUserInput}
                            type="text"
                            className="form-control"
                            value={this.state.entityAddress}
                            name="entityAddress"
                            placeholder="Manufacturer Address"
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input
                            onChange={this.handleUserInput}
                            type="text"
                            className="form-control"
                            value={this.state.quality}
                            name="quality"
                            placeholder="Quality at Manufacturer"
                        />
                    </div>
                    <button
                        onClick={this.submitNewTransaction}
                        className="btn btn-primary"
                    >
                        Add Manufacturer Info
                    </button>
                </div>
            );
        } else if (this.state.transactionState === 2) {
            form = (
                <div className="d-flex flex-column justify-content-center text-center">
                    <h1>Wholesaler</h1>
                    <div className="input-group mb-3">
                        <input
                            id="man-name"
                            onChange={this.handleUserInput}
                            type="text"
                            className="form-control"
                            value={this.state.entityName}
                            name="entityName"
                            placeholder="Wholesaler Name"
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input
                            onChange={this.handleUserInput}
                            type="text"
                            className="form-control"
                            value={this.state.entityAddress}
                            name="entityAddress"
                            placeholder="Wholesaler Address"
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input
                            onChange={this.handleUserInput}
                            type="text"
                            className="form-control"
                            value={this.state.quality}
                            name="quality"
                            placeholder="Wholesaler at Manufacturer"
                        />
                    </div>
                    <button
                        onClick={this.submitNewTransaction}
                        className="btn btn-primary"
                    >
                        Add Wholesaler Info
                    </button>
                </div>
            );
        } else if (this.state.transactionState === 3) {
            form = (
                <div className="d-flex flex-column justify-content-center text-center">
                    <h1>Logistics</h1>
                    <div className="input-group mb-3">
                        <input
                            id="man-name"
                            onChange={this.handleUserInput}
                            type="text"
                            className="form-control"
                            value={this.state.entityName}
                            name="entityName"
                            placeholder="Logistics Name"
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input
                            onChange={this.handleUserInput}
                            type="text"
                            className="form-control"
                            value={this.state.entityAddress}
                            name="entityAddress"
                            placeholder="Logistics Address"
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input
                            onChange={this.handleUserInput}
                            type="text"
                            className="form-control"
                            value={this.state.quality}
                            name="quality"
                            placeholder="Quality at Logistics"
                        />
                    </div>
                    <button
                        onClick={this.submitNewTransaction}
                        className="btn btn-primary"
                    >
                        Add Logistics Info
                    </button>
                </div>
            );
        } else if (this.state.transactionState === 4) {
            form = (
                <div className="d-flex flex-column justify-content-center text-center">
                    <h1>Retailer</h1>
                    <div className="input-group mb-3">
                        <input
                            id="man-name"
                            onChange={this.handleUserInput}
                            type="text"
                            className="form-control"
                            value={this.state.entityName}
                            name="entityName"
                            placeholder="Retailer Name"
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input
                            onChange={this.handleUserInput}
                            type="text"
                            className="form-control"
                            value={this.state.entityAddress}
                            name="entityAddress"
                            placeholder="Retailer Address"
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input
                            onChange={this.handleUserInput}
                            type="text"
                            className="form-control"
                            value={this.state.quality}
                            name="quality"
                            placeholder="Quality at Retailer"
                        />
                    </div>
                    <button
                        onClick={this.submitNewTransaction}
                        className="btn btn-primary"
                    >
                        Add Retailer Info
                    </button>
                </div>
            );
        } else if (this.state.transactionState === 5) {
            form = (
                <div className="d-flex flex-column justify-content-center text-center">
                    <h1>Consumer</h1>
                    <div className="input-group mb-3">
                        <input
                            id="man-name"
                            onChange={this.handleUserInput}
                            type="text"
                            className="form-control"
                            value={this.state.entityName}
                            name="entityName"
                            placeholder="Consumer Name"
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input
                            onChange={this.handleUserInput}
                            type="text"
                            className="form-control"
                            value={this.state.quality}
                            name="quality"
                            placeholder="Quality at Consumer"
                        />
                    </div>
                    <button
                        onClick={this.submitNewTransaction}
                        className="btn btn-primary"
                    >
                        Add Consumer info
                    </button>
                </div>
            );
        } else if (this.state.transactionState === 6) {
            let viewOrderUrl = "/dashboard/" + this.state.orderId;
            form = (
                <div>
                    <h2>{this.state.orderId} Is Stored!</h2>
                    <a
                        href={viewOrderUrl}
                        className="btn btn-primary btn-lg active text-center"
                        role="button"
                        aria-pressed="true"
                    >
                        View Order
                    </a>
                </div>
            );
        }
        return (
            <div>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="card wrapper_form text-center">
                            <div className="card-body">
                                <form>{form}</form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default NewProduceForm;
