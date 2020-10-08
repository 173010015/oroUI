import React, { useState, useEffect } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import { makeStyles } from '@material-ui/styles';
import Alert from '@material-ui/lab/Alert';
import {
  Grid,
  Button,
  TextField,
  Link,
  Typography
} from '@material-ui/core';

const schema = {
  phone: {
    presence: { allowEmpty: false, message: 'is required' },
    format:{
      pattern: "[0-9]+",
      message: "can only have digits"
    },
    length: {
      is: 10
    }
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 128
    }
  }
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100%'
  },
  grid: {
    height: '100%'
  },
  quoteContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  quote: {
    backgroundColor: theme.palette.neutral,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundImage: 'url(/images/auth.jpg)',
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  quoteInner: {
    textAlign: 'center',
    flexBasis: '600px'
  },
  quoteText: {
    color: theme.palette.white,
    fontWeight: 300
  },
  name: {
    marginTop: theme.spacing(3),
    color: theme.palette.white
  },
  bio: {
    color: theme.palette.white
  },
  contentContainer: {},
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  contentHeader: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(5),
    paddingBototm: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  logoImage: {
    marginLeft: theme.spacing(4)
  },
  contentBody: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  form: {
    paddingLeft: 60,
    paddingRight: 100,
    paddingBottom: 125,
    flexBasis: 700,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  },
  title: {
    marginTop: theme.spacing(3)
  },
  socialButtons: {
    marginTop: theme.spacing(3)
  },
  LinkIconLeft: {
    marginLeft: theme.spacing(9)
  },
  LinkIconBottom: {
    marginBottom: theme.spacing(2)
  },
  sugestion: {
    marginTop: theme.spacing(2)
  },
  textField: {
    marginTop: theme.spacing(2)
  },
  signInButton: {
    margin: theme.spacing(2, 0)
  }
}));

const SignIn = props => {
  const { history } = props;
  const classes = useStyles();
  const [formState, setFormState] = useState({
    isValid: false,
    isValidLogin: true,
    values: {},
    touched: {},
    errors: {}
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);


  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      isValidLogin: true,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const handleSignIn = event => {
    let apiUrl = "https://oro-api-qa.herokuapp.com/login";
    let headers =new Headers();
    headers.set('Content-Type','application/json');
    fetch(apiUrl,{
      method:'POST',
      headers: headers,
      body : JSON.stringify(formState.values)
    }).then(function(response){
          if(response.ok){
            return response.json();
          }
          else{
            throw new Error("something went wrong...");
          }
    })
    .then(data=>{
      if(data.success === true){
        console.log(data);
        localStorage.setItem('isAuthenticated',true);
        localStorage.setItem('token',data.token);
        history.push('/dashboard');
        console.log("how");
      }
      else{
        setFormState(formState =>({
          ...formState,
          isValidLogin: false
        }));
        console.log("Jow");
        console.log(data);
      }
    })
    event.preventDefault();
  };
 
  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div className={classes.root}>
      <Grid
        className={classes.grid}
        container
      >
        <Grid
          className={classes.quoteContainer}
          item
          lg={7}
        >
          <div className={classes.quote}>
            <div className={classes.quoteInner}>
              <Typography
                className={classes.quoteText}
                variant="h1"
              >
                Hella Bikram Cosby sweater McSweeney's, salvia kitsch before
                they sold out High Life.
              </Typography>
              <div className={classes.person}>
                <Typography
                  className={classes.name}
                  variant="body1"
                >
                  Takamaru Ayako
                </Typography>
                <Typography
                  className={classes.bio}
                  variant="body2"
                >
                  Manager at inVision
                </Typography>
              </div>
            </div>
          </div>
        </Grid>
        <Grid
          className={classes.content}
          item
          lg={5}
          xs={12}
        >
          <div className={classes.content}>
            <div className={classes.contentBody}>
              <form
                className={classes.form}
                onSubmit={handleSignIn}
              >
                <Typography
                  className={classes.title}
                  variant="h2"
                >
                  Sign in
                </Typography>
                <Typography
                  color="textSecondary"
                  gutterBottom
                >
                  Sign in with your Phone Number
                </Typography>
                <Typography
                  align="center"
                  className={classes.sugestion}
                  color="textSecondary"
                  variant="body1"
                >
                  {formState.isValidLogin ? null : <Alert severity="error">Invalid Credentials. Please check</Alert>}
                </Typography>
                <TextField
                  className={classes.textField}
                  error={hasError('phone')}
                  fullWidth
                  helperText={
                    hasError('phone') ? formState.errors.phone[0] : null
                  }
                  label="Phone Number"
                  name="phone"
                  onChange={handleChange}
                  type="tel"
                  value={formState.values.phone || ''}
                  variant="outlined"
                />
                <TextField
                  className={classes.textField}
                  error={hasError('password')}
                  fullWidth
                  helperText={
                    hasError('password') ? formState.errors.password[0] : null
                  }
                  label="Password"
                  name="password"
                  onChange={handleChange}
                  type="password"
                  value={formState.values.password || ''}
                  variant="outlined"
                />
                <Button
                  className={classes.signInButton}
                  color="primary"
                  disabled={!formState.isValid}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Sign in now
                </Button>
                <Typography className ={classes.LinkIconBottom}
                  color="textSecondary"
                  variant="body1"
                >
                  Don't have an account?{' '}
                  <Link
                    component={RouterLink}
                    to="/sign-up"
                    variant="h6"
                  >
                    Sign up
                  </Link>
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  {' '} {''}
                  <Link
                    component={RouterLink}
                    to="/sign-in/otp"
                    variant="h6"
                  >
                    Login via OTP
                  </Link>
                  <Link className ={classes.LinkIconLeft}
                    component={RouterLink}
                    to="/account/password/reset"
                    variant="h6"
                  >
                   Forgot your Password?
                  </Link>
                </Typography>
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

SignIn.propTypes = {
  history: PropTypes.object
};

export default withRouter(SignIn);
