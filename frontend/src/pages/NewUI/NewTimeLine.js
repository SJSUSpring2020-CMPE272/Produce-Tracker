import React, { Component , useState} from 'react';
// import '../../App.css';
import axios from 'axios';
import { Redirect } from 'react-router';
import Button from '@material-ui/core/Button';
 import backendServer from '../../config'
 import {health} from '../../enum'
 import MuiAlert from '@material-ui/lab/Alert';
 import Snackbar from '@material-ui/core/Snackbar';
 import { withStyles } from '@material-ui/core/styles';

// import { connect } from 'react-redux';
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const styles = (theme) => ({})

//Define a Login Component
class Login extends Component {
    //call the constructor method
    constructor(props) {
        //Call the constrictor of Super class i.e The Component
        super(props);
        //maintain the state required for this component
        this.state = {
            open:false,
            timeLineData:{
              grocery_name:null,
              grocery_address:null,
              grocery_employeeid:null,
              grocery_health:"0",
              grocery_email:null,
              grocery_date:null,
              delivery_name:null,
              delivery_health:"0",
              delivery_address:null,
              delivery_employeeid:null,
              delivery_email:null,
              delivery_date:null,
              consumer_name:null,
              consumer_address:null,
              consumer_email:null,
              consumer_date:null
            }
        }
        //Bind the handlers to this className
    }
    //Call the Will Mount to set the auth Flag to false
    componentWillMount() {
       axios.get(`${backendServer}/getOrder?key=${this.props.match.params.id}`)
            .then(response => {
                console.log(response)
                 this.setState({
                  timeLineData :response.data[0].Record
                 })
//                  consumer_address: "Alameda, San Jose"
// consumer_date: "26-04-2019 20:45:00"
// consumer_email: "narain@sjsu.edu"
// consumer_name: "Narain"
// delivery_address: "Palo Alto, San Jose"
// delivery_date: "26-04-2019 18:21:00"
// delivery_email: "instacart@gmail.com"
// delivery_employeeid: "8958648512"
// delivery_health: 0
// delivery_name: "Insta Cart"
// grocery_address: "El Camino, San Jose"
// grocery_date: "26-04-2019 15:21:00"
// grocery_email: "nib@gmail.com"
// grocery_employeeid: "568568568"
// grocery_health: 0
// grocery_name: "New India Bazaar"
                }
            ).catch( ex =>{
                this.setState({
                    authFlag: false
                })
            });
    }
    handleClick = ()=>{
      
      const data={
        barcode:this.props.match.params.id,
        type:localStorage.getItem('type')==="Grocery"?"grocey":"delivery",
        grocery_email: this.state.grocery_email,
        delivery_email: this.state.delivery_email,
        consumer_email: "narain@mailinator.com",
      }
      axios.post(`${backendServer}/reportCorona`, data)
            .then(response => {
                console.log(response)
                
                 if(data.type==="Grocery"){
                  this.setState({
                    open: true,
                    grocery_health : "1"
                   })
                 }
                 else{
                  this.setState({
                    open: true,
                    delivery_health:"1"
                   })
                 }
                }
             ).catch( ex =>{
              alert("Error")
             });
    }
    handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      this.setState({
        open:false
      })
  
    }
    render() {
        let redirectVar = null;
        if (localStorage.getItem('type') == 0 && this.state.authFlag) {
            let redVar = "/student/profile/"+ localStorage.getItem('id');
            redirectVar = <Redirect to={redVar} />
        }
        else if(this.state.authFlag){
            redirectVar = <Redirect to="/company/postings" />
        }

        return (
            <div>
            <h2 className="text-center text-muted py-3">Barcode no. {this.props.match.params.id}</h2>
<div className="container py-2 mt-4 mb-4">
  <div className="row no-gutters">
    <div className="col-sm"> </div>
    <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
      <div className="row h-50">
        <div className="col">&nbsp;</div>
        <div className="col">&nbsp;</div>
      </div>
      <h5 className="m-2">
        <span  className={this.state.timeLineData.grocery_health==='0'?'badge badge-pill bg-success border' : 'badge badge-pill bg-danger border'}>&nbsp;</span>
      </h5>
      <div className="row h-50">
        <div className="col border-right">&nbsp;</div>
        <div className="col">&nbsp;</div>
      </div>
    </div>
    <div className="col-sm py-2">
      <div  className={this.state.timeLineData.grocery_health==='0'?'card shadow border-success' : 'card shadow border-danger'}>
        <div className="card-body">
          <div className="float-right text-muted small">{this.state.timeLineData.grocery_date}</div>
          <h4 className="card-title text-muted">{this.state.timeLineData.grocery_name}</h4>
          <p><i className="card-text text-muted">{this.state.timeLineData.grocery_address}</i></p>
          <span className="card-text">Employee ID :{this.state.timeLineData.grocery_employeeid}</span><br/>
          <span className="card-text">Employee health :{health[this.state.timeLineData.grocery_health]}</span><br/>
          <span className="card-text">Email ID :{this.state.timeLineData.grocery_email}</span>
        </div>
      </div>
    </div>
  </div>
  <div className="row no-gutters">
    <div className="col-sm py-2">
      <div className={this.state.timeLineData.delivery_health==='0'?'card shadow border-success' : 'card shadow border-danger'}>
        <div className="card-body">
          <div className="float-right text-muted small">{this.state.timeLineData.delivery_date}</div>
          <h4 className="card-title text-muted">{this.state.timeLineData.delivery_name}</h4>
          <p><i className="card-text text-muted">{this.state.timeLineData.delivery_address}</i></p>
          <span className="card-text">Employee ID :{this.state.timeLineData.delivery_employeeid}</span><br/>
          <span className="card-text">Employee health :{health[this.state.timeLineData.delivery_health]}</span><br/>
          <span className="card-text">Email ID :{this.state.timeLineData.delivery_email}</span>
        </div>
      </div>
    </div>
    <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
      <div className="row h-50">
        <div className="col border-right">&nbsp;</div>
        <div className="col">&nbsp;</div>
      </div>
      <h5 className="m-2">
      <span  className={this.state.timeLineData.delivery_health==='0'?'badge badge-pill bg-success border' : 'badge badge-pill bg-danger border'}>&nbsp;</span>
      </h5>
      <div className="row h-50">
        <div className="col border-right">&nbsp;</div>
        <div className="col">&nbsp;</div>
      </div>
    </div>
    <div className="col-sm">  </div>
  </div>
  <div className="row no-gutters">
    <div className="col-sm"> </div>
    <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
      <div className="row h-50">
        <div className="col border-right">&nbsp;</div>
        <div className="col">&nbsp;</div>
      </div>
      <h5 className="m-2">
        <span className="badge badge-pill bg-success border">&nbsp;</span>
      </h5>
      <div className="row h-50">
        <div className="col border-right">&nbsp;</div>
        <div className="col">&nbsp;</div>
      </div>
    </div>
    <div className="col-sm py-2">
      <div className="card border-success shadow">
        <div className="card-body">
          <div className="float-right text-muted small">{this.state.timeLineData.consumer_date}</div>
          <h4 className="card-title text-muted">{this.state.timeLineData.consumer_name}</h4>
          <p><i className="card-text text-muted">{this.state.timeLineData.consumer_address}</i></p>
        <p>Email ID : {this.state.timeLineData.consumer_email} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        </div>
      </div>
    </div>
  </div>
  <div className="container- margin40 text-center" >
  <Button variant="contained" size="large" color="secondary"  onClick={this.handleClick}>
          Alert everyone
        </Button>
        <Snackbar open={this.state.open} autoHideDuration={6000} onClose={this.handleClose}>
        <Alert onClose={this.handleClose} severity="success">
          Everyone in the transaction is informed
        </Alert>
      </Snackbar>
        </div>
  </div>

</div>
        )
    }
}
//export Login Component
export default withStyles(styles)(Login);