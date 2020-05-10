import React  , {Component}from 'react';
import { Redirect } from 'react-router';
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
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LinkIcon from '@material-ui/icons/Link';
import { withStyles } from '@material-ui/core/styles';

const styles =(theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class SignIn extends Component {
  constructor(props) {
    //Call the constrictor of Super class i.e The Component
    super(props);
    //maintain the state required for this component
    this.state = {
       barcode:"",
       redirect:false
    }

    this.handleUserInput = this.handleUserInput.bind(this);
  }

handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value })
}
render(){
  const { classes } = this.props;
  let redirectVar = null;
  if(this.state.redirect){
    let link = "/timeline/"+ this.state.barcode
    redirectVar= <Redirect to={link} />
  }
  return (
    <Container component="main" maxWidth="xs">
      {redirectVar}
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LinkIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Retrieve Order
        </Typography>
        <div className={classes.form} Validate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="barcode"
                label="Barcode no."
                name="barcode"
                onChange={this.handleUserInput}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>this.setState({redirect:true})}
          >
            Retrieve
          </Button>
          </div>
      </div>
      
    </Container>
  );
}
}

export default withStyles(styles)(SignIn);