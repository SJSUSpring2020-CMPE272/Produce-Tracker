import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import backendServer from '../config'

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
            transactionState: 0
        }
        //Bind the handlers to this className
        this.handleUserInput = this.handleUserInput.bind(this);
        this.submitNewProduce = this.submitNewProduce.bind(this);
        this.submitNewTransaction = this.submitNewTransaction.bind(this);

    }
    //Call the Will Mount to set the auth Flag to false
    componentWillMount() {

    }
    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value })
    }


    submitNewProduce = (e) => {
        //prevent page from refresh
        e.preventDefault();
        if (this.state.orderId && this.state.foodItem) {
            let data = {
                orderId: this.state.orderId,
                foodItem: this.state.foodItem
            }
            console.log(data);
            //set the with credentials to true
            axios.defaults.withCredentials = true;
            //make a post request with the user data
            axios.post(`${backendServer}/createRawFood`, data)
                .then(response => {
                    this.setState({
                        errorMessage: null,
                        transactionState: this.state.transactionState + 1
                 })
                }
                ).catch(ex => {
                    console.log(ex)
                });
        }
        else {
            this.setState({
                errorMessage: "ORDER ID & Produce Name Required",
            });
        }
    }
    submitNewTransaction = (e) => {

        //prevent page from refresh
        e.preventDefault();
        if(this.state.orderId && this.state.entityName && this.state.entityAddress && this.state.quality)
        {
        let data = {
            orderId: this.state.orderId,
            entityName: this.state.entityName,
            entityAddress: this.state.entityAddress,
            quality: this.state.quality
        };
        switch (this.state.transactionState) {
            case 1:
                data.type = 'manufacturer'
                break;
            case 2:
                data.type = 'wholesaler'
                break;
            case 3:
                data.type = 'logistics'
                break;
            case 4:
                data.type = 'retailer'
                break;
            case 5:
                data.type = 'consumer'
                break;
        }
        console.log(data);
        //set the with credentials to true
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post(`${backendServer}/changeState`, data)
            .then(response => {
                this.setState({
                    entityName: "",
                    entityAddress: this.state.transactionState===4 ? "Not required":"",
                    quality: "",
                    transactionState : this.state.transactionState + 1,
                    errorMessage:""
             })
            }
            ).catch(ex => {
                console.log(ex)
            });
        
    }else {
        this.setState({
            errorMessage: "Entity Name , Address & Quality Required",
        });
    }
    }

    render() {
        //redirect based on successful NewProduceForm
        let errorBox = null;
        if (this.state.errorMessage) {
            errorBox = <div className="alert alert-danger">
                {this.state.errorMessage}
            </div>
        }
        let form = null;
        if (this.state.transactionState === 0) {
            form = <div>
                <h1>Create New Produce</h1>
                <div className="form-group">
                <input id="orderId" onChange={this.handleUserInput} type="text" className="form-control" value={this.state.orderId} name="orderId" placeholder="Order ID" />
            </div>
                <div className="form-group">
                    <input id="foodItem" onChange={this.handleUserInput} type="text" className="form-control" value={this.state.foodItem} name="foodItem" placeholder="Produce Name" />
                </div>
                <button onClick={this.submitNewProduce} className="btn-outline ">Add New Produce</button>
            </div>
        }
        else if (this.state.transactionState === 1) {
            form = <div>
                <h1>Manufacturer</h1>
                <div className="form-group">
                <input id="man-name" onChange={this.handleUserInput} type="text" className="form-control" value={this.state.entityName} name="entityName" placeholder="Manufacturer Name" />
            </div>
                <div className="form-group">
                    <input onChange={this.handleUserInput} type="text" className="form-control" value={this.state.entityAddress} name="entityAddress" placeholder="Manufacturer Address" />
                </div>
                <div className="form-group">
                    <input onChange={this.handleUserInput} type="text" className="form-control" value={this.state.quality} name="quality" placeholder="Quality at Manufacturer" />
                </div>
                <button onClick={this.submitNewTransaction} className="btn-outline ">Change State</button>
            </div>
        }
        else if (this.state.transactionState === 2) {
            form = <div>
                <h1>Wholesaler</h1>
                <div className="form-group">
            <input id="man-name" onChange={this.handleUserInput} type="text" className="form-control" value={this.state.entityName} name="entityName" placeholder="Wholesaler Name" />
        </div>
            <div className="form-group">
                <input onChange={this.handleUserInput} type="text" className="form-control" value={this.state.entityAddress} name="entityAddress" placeholder="Wholesaler Address" />
            </div>
            <div className="form-group">
                <input onChange={this.handleUserInput} type="text" className="form-control" value={this.state.quality} name="quality" placeholder="Wholesaler at Manufacturer" />
            </div>
            <button onClick={this.submitNewTransaction} className="btn-outline ">Change State</button>
        </div>
        }
        else if (this.state.transactionState === 3) {
            form = <div>
                <h1>Logistics</h1>
                <div className="form-group">
            <input id="man-name" onChange={this.handleUserInput} type="text" className="form-control" value={this.state.entityName} name="entityName" placeholder="Logistics Name" />
        </div>
            <div className="form-group">
                <input onChange={this.handleUserInput} type="text" className="form-control" value={this.state.entityAddress} name="entityAddress" placeholder="Logistics Address" />
            </div>
            <div className="form-group">
                <input onChange={this.handleUserInput} type="text" className="form-control" value={this.state.quality} name="quality" placeholder="Quality at Logistics" />
            </div>
            <button onClick={this.submitNewTransaction} className="btn-outline ">Change State</button>
        </div>
        }
        else if (this.state.transactionState === 4) {
            form = <div>
                <h1>Retailer</h1>
                <div className="form-group">
            <input id="man-name" onChange={this.handleUserInput} type="text" className="form-control" value={this.state.entityName} name="entityName" placeholder="Retailer Name" />
        </div>
            <div className="form-group">
                <input onChange={this.handleUserInput} type="text" className="form-control" value={this.state.entityAddress} name="entityAddress" placeholder="Retailer Address" />
            </div>
            <div className="form-group">
                <input onChange={this.handleUserInput} type="text" className="form-control" value={this.state.quality} name="quality" placeholder="Quality at Retailer" />
            </div>
            <button onClick={this.submitNewTransaction} className="btn-outline ">Change State</button>
        </div>
        }
        else if (this.state.transactionState === 5) {
            form = <div><h1>Consumer</h1><div className="form-group">
            <input id="man-name" onChange={this.handleUserInput} type="text" className="form-control" value={this.state.entityName} name="entityName" placeholder="Consumer Name" />
        </div>
            <div className="form-group">
                <input onChange={this.handleUserInput} type="text" className="form-control" value={this.state.quality} name="quality" placeholder="Quality at Consumer" />
            </div>
            <button onClick={this.submitNewTransaction} className="btn-outline ">Change State</button>
        </div>
        }
        else if (this.state.transactionState === 6) {
        let viewOrderUrl= "/dashboard/" + this.state.orderId 
        form = <div><h1>{this.state.orderId} was completed</h1>
        <a href={viewOrderUrl}>View Order</a>
        </div>
        }
        return (
            <div>
                <div className="NewProduceForm-form">
                    <div className="main container-fluid">
                        <div className="centered-container top-aligned col-sm-6 col-sm-offset-3">
                            <div >
                                <form>
                                    <div className="row">
                                        {errorBox}
                                    </div>
                                    {form}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default NewProduceForm;