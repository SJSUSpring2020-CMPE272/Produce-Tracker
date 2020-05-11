import React , {Component , useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LinkIcon from '@material-ui/icons/Link';
import Alert from '@material-ui/lab/Alert';
import axios from 'axios';
 import backendServer from '../../config'

const styles = (theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class NewOrder extends Component {
  //call the constructor method
  constructor(props) {
      //Call the constrictor of Super class i.e The Component
      super(props);
      //maintain the state required for this component
      this.state = {
        alert:0,
        barcode:null,
        grocery_name:null,
        grocery_address:null,
        grocery_employeeid:null,
        grocery_health:null,
        grocery_email:null,
        grocery_date:null,
        delivery_name:null,
        delivery_health:null,
        delivery_address:null,
        delivery_employeeid:null,
        delivery_email:null,
        delivery_date:null,
        consumer_name:null,
        consumer_address:null,
        consumer_email:null,
        consumer_date:null
      }
      this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value })
  }

  addOrderHandler = ()=>{
    const data= {
        barcode:this.state.barcode,
        grocery_name:"New India Bazaar",
        grocery_address:"El Camino, San Jose",
        grocery_employeeid:this.state.grocery_employeeid,
        grocery_health:"0",
        grocery_email:"nib@gmail.com",
        grocery_date:this.state.grocery_date,
        delivery_name:this.state.delivery_name,
        delivery_health:"0",
        delivery_address:this.state.delivery_address,
        delivery_employeeid:this.state.delivery_employeeid,
        delivery_email:this.state.delivery_email,
        delivery_date:this.state.delivery_date,
        consumer_name:this.state.consumer_name,
        consumer_address:this.state.consumer_address,
        consumer_email:this.state.consumer_email,
        consumer_date :this.state.consumer_date
    }
    console.log(data);
    axios.post(`${backendServer}/createNewOrder`, data)
            .then(response => {
                console.log(response)
                 this.setState({
                    alert :1
                 })
             }
             ).catch( ex =>{
              this.setState({
                alert :-1
              })
             });
     
  }

render() {
  const { classes } = this.props;
  let alertBox= null;
  if(this.state.alert === -1){
    alertBox = <Alert variant="outlined" severity="error">
    Error adding new order
    </Alert>
  }
  else if(this.state.alert === 1){
    alertBox = <Alert variant="outlined" severity="success">
    Order added successfully
    </Alert>
  }
  else{
    alertBox= null
  }
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      {alertBox}
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Add a new order
        </Typography>
        <div className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="barcode"
                label="Barcode no."
                name="barcode"
                onChange= {this.handleUserInput}
                value={this.barcode}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="grocery_employeeid"
                required
                fullWidth
                id="grocery_employeeid"
                label="Grocery Employee ID"
                autoFocus
                onChange= {this.handleUserInput}
                value={this.grocery_employeeid}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
              id="datetime-local"
              label="Order Time"
              name="grocery_date"
              type="datetime-local"
              defaultValue="2017-05-24T10:30"
              InputLabelProps={{
                shrink: true,
              }}
              onChange= {this.handleUserInput}
                value={this.grocery_date}
              />
            </Grid>
          </Grid>
          
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="delivery_name"
                required
                fullWidth
                id="delivery_name"
                label="Deliver Company Name"
                autoFocus
                onChange= {this.handleUserInput}
                value={this.delivery_name}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="delivery_email"
                required
                fullWidth
                id="delivery_email"
                label="Delivery Company Email"
                autoFocus
                onChange= {this.handleUserInput}
                value={this.delivery_email}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="delivery_employeeid"
                required
                fullWidth
                id="delivery_employeeid"
                label="Delivery Employee ID"
                autoFocus
                onChange= {this.handleUserInput}
                value={this.delivery_employeeid}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
              id="datetime-local"
              name="delivery_date"
              label="Pickup Time"
              type="datetime-local"
              defaultValue="2017-05-24T10:30"
              InputLabelProps={{
                shrink: true,
              }}
              onChange= {this.handleUserInput}
                value={this.delivery_date}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="delivery_address"
                required
                fullWidth
                id="firstName"
                label="Delivery Company Address"
                autoFocus
                onChange= {this.handleUserInput}
                value={this.delivery_address}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
              id="datetime-local"
              name="consumer_date"
              label="Delivery Time"
              type="datetime-local"
              defaultValue="2017-05-24T10:30"
              InputLabelProps={{
                shrink: true,
              }}
              onChange= {this.handleUserInput}
                value={this.consumer_date}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="consumer_name"
                onChange= {this.handleUserInput}
                required
                fullWidth
                id="firstName"
                label="consumer Name"
                autoFocus
                onChange= {this.handleUserInput}
                value={this.consumer_name}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                onChange= {this.handleUserInput}
                name="consumer_email"
                required
                fullWidth
                id="firstName"
                label="consumer Email"
                autoFocus
                onChange= {this.handleUserInput}
                value={this.consumer_email}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="fname"
                name="consumer_address"
                onChange= {this.handleUserInput}
                value={this.consumer_address}
                required
                fullWidth
                id="firstName"
                label="consumer Address"
                autoFocus
                onChange= {this.handleUserInput}
                value={this.consumer_address}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={this.addOrderHandler}
          >
            Add
          </Button>
          </div>
      </div>
      
    </Container>
  );
}}
export default withStyles(styles)(NewOrder);