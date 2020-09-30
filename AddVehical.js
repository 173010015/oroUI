import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import FacebookIcon from 'src/icons/Facebook';
import GoogleIcon from 'src/icons/Google';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const AddVehical = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Page
      className={classes.root}
      title="Login"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: 'demo@devias.io',
              password: 'Password123'
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
              password: Yup.string().max(255).required('Password is required')
            })}
            onSubmit={() => {
              navigate('/app/dashboard', { replace: true });
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Sign in
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Sign in on the internal platform
                  </Typography>
                </Box>
                <Grid
                  container
                  spacing={3}
                >
                  <Grid
                    item
                    xs={12}
                    md={6}
                  >
                    <Button
                      color="primary"
                      fullWidth
                      startIcon={<FacebookIcon />}
                      onClick={handleSubmit}
                      size="large"
                      variant="contained"
                    >
                      Login with Facebook
                    </Button>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                  >
                    <Button
                      fullWidth
                      startIcon={<GoogleIcon />}
                      onClick={handleSubmit}
                      size="large"
                      variant="contained"
                    >
                      Login with Google
                    </Button>
                  </Grid>
                </Grid>
                <Box
                  mt={3}
                  mb={1}
                >
                  <Typography
                    align="center"
                    color="textSecondary"
                    variant="body1"
                  >
                    or login with email address
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <Box my={2}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign in now
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Don&apos;t have an account?
                  {' '}
                  <Link
                    component={RouterLink}
                    to="/register"
                    variant="h6"
                  >
                    Sign up
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};

export default AddVehical;

// function AddVehical() {

//     let [vehicle_number,setvehicle_number ]= useState();
//     let [topic,settopic]= useState();
//     let [tyre_number,settyre_number]= useState();
//     let [passing_tonne,setpassing_tonne]= useState();
//     let [vehical_weight,setvehical_weight]= useState();
//     let [vehical_flooring,setvehical_flooring]= useState('');
//     let [vehical_length,setvehical_length]= useState();

//     let handleSubmit=()=>{
//         alert( "You have added vehical succeesfully !");};

//     return (

//         <div>
//          <form onSubmit={()=>handleSubmit()}>

//             <div>
//             <label> Vehical Number :</label>
//             <input type= 'text' value={vehicle_number} onChange={()=>setvehicle_number(vehicle_number)}></input>
//             </div>
//             <br/>
            
//             <div>
//             <label> Vehical Details :</label>
//                 <select value={topic} onChange={()=>settopic(topic)}>
//                 <option value="option 1"> Option 1</option>
//                 <option value="option 2"> Option 2</option>
//                 <option value="option 3"> Option 3</option>
//                 </select>
//             </div>
//             <br/>
            
//             <div>
//             <label> Number of tyres :</label>
//                 <input 
//                 type= 'number' 
//                 value={tyre_number} 
//                 onChange={()=>settyre_number(tyre_number)}>
//                 </input>
//             </div>
//             <br/>
            
//             <div>
//             <label> Passing tonne :</label>
//                 <input 
//                 type= 'number' 
//                 value={passing_tonne} 
//                 onChange={()=>setpassing_tonne(passing_tonne)}>
//                 </input>
//                 </div>
//             <br/>

//             <div>
//             <label> Vehical Height :</label>
//                 <input 
//                 type= 'number' 
//                 value={vehical_weight} 
//                 onChange={()=>setvehical_weight(vehical_weight)}>
//                 </input>
//             </div>
//             <br/>

//             <div>
//             <label> Vehical flooring :</label>
//                 <input 
//                 type= 'number' 
//                 value={vehical_flooring} 
//                 onChange={()=>setvehical_flooring(vehical_flooring)}>
//                 </input>
//             </div>
//             <br/>
            
//             <div>
//             <label> Passing length :</label>
//                 <input 
//                 type= 'number' 
//                 value={vehical_length} 
//                 onChange={()=>setvehical_length}>
//                 </input>
//                 </div>
//             <br/>

//             <button type='submit'>Add Vehical</button>

//             </form>   
//         </div>
//     )
// }

// export default AddVehical
