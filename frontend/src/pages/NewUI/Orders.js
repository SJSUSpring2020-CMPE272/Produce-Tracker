import React , {Component}from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
 import backendServer from '../../config'
 import {health} from '../../enum'
// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

const styles = (theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
});
class Orders extends Component {
    //call the constructor method
    constructor(props) {
        //Call the constrictor of Super class i.e The Component
        super(props);
        //maintain the state required for this component
        this.state = {
           orders: []
        }
        //Bind the handlers to this className
    }
    //Call the Will Mount to set the auth Flag to false
    componentWillMount() {
       axios.get(`${backendServer}/queryAllOrders`)
            .then(response => {
                console.log(response)
                 this.setState({
                    orders :response.data
                 })
             }
             ).catch( ex =>{
                 this.setState({
                     authFlag: false
                 })
             });
     }
render() {
    const { classes } = this.props;
    let list = null;
    if(localStorage.getItem('type')==='Grocery'){
        list = this.state.orders.map(row=>{
            return(
            <TableRow key={row.Key}>
              <TableCell>{row.Record.grocery_date}</TableCell>
              <TableCell>{row.Key}</TableCell>
              <TableCell>{row.Record.grocery_employeeid}</TableCell>
              <TableCell>{health[row.Record.grocery_health]}</TableCell>
            </TableRow>
            )
        })
    }
    else{
        list = this.state.orders.map(row=>{
            return(
            <TableRow key={row.Key}>
              <TableCell>{row.Record.delivery_date}</TableCell>
              <TableCell>{row.Key}</TableCell>
              <TableCell>{row.Record.delivery_employeeid}</TableCell>
              <TableCell>{health[row.Record.delivery_health]}</TableCell>
            </TableRow>
            )
        })
    }

  return (
    <Grid item xs={12}>
     <Paper className={classes.paper}>
     <Typography component="h2" variant="h6" color="primary" gutterBottom>
     Recent Orders
    </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Barcode</TableCell>
            <TableCell>Employee ID</TableCell>
            <TableCell>Employee Health</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         {list}
        </TableBody>
      </Table>
      </Paper>
     </Grid>
  );
}
}
export default withStyles(styles)(Orders);