import React from 'react';
import clsx from 'clsx';
import FormControl from '@material-ui/core/FormControl';
import { Link as RouterLink } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Card,
  Box,
  Button,
  CardHeader,
  CardContent,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
  Grid,
  makeStyles, Divider
} from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(4)
    }
  }));


const AddVehicle = props => {
    const { className, ...rest } = props;
  const [age, setAge] = React.useState('');
  const classes = useStyles();
 // const navigate = useNavigate();
  const handleDetail = (event) => {
    setAge(event.target.value);
  };

  return (
    <div
      className={classes.root}
    >
           <Grid
        container
        spacing={6}
      >
            <Grid
          item
          lg={10}
          md={6}
          xl={8}
          xs={12}
        >
      <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
     <CardHeader
          subheader="Enter the Vehicle details"
          title="Add Vehicle"
        />
        <Divider />
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="left"
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              vehical_Number: '',
              vehical_tyres: '',
              passing_tonnes: '',
              vehical_height: '',
              vehical_flooring: '',
              vehical_length: '',
              policy: false
            }}
            validationSchema={
              Yup.object().shape({
                vehical_Number: Yup.number().max(10).required('Vehical Number is required'),
                vehical_tyres: Yup.number().max(25).required('Number of tyres is required'),
                vehical_tonnes: Yup.number().max(50).required('passing_tonnes is required'),
                vehical_height: Yup.number().max(50).required('height is required'),
                vehical_flooring: Yup.number().max(50).required('flooring is required'),
                vehical_length: Yup.number().max(50).required('length is required'),
                policy: Yup.boolean().oneOf([true], 'This field must be checked')
              })
            }
            onSubmit={() => {
             // navigate('/app/dashboard', { replace: true });
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
                <TextField
                  error={Boolean(touched.vehical_Number && errors.vehical_Number)}
                  fullWidth
                  helperText={touched.vehical_Number && errors.vehical_Number}
                  label="Vehical Number"
                  margin="normal"
                  name="vehical_Number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.vehical_Number}
                  variant="outlined"
                />
                <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">Details</InputLabel>
                <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={age}
                onChange={handleDetail}
                >
                  <MenuItem value="10">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Option 1</MenuItem>
                  <MenuItem value={20}>Option 2</MenuItem>
                  <MenuItem value={30}>Option 3</MenuItem>
                </Select>
                <FormHelperText>Type of vehical</FormHelperText>
              </FormControl>
                <TextField
                  error={Boolean(touched.vehical_tyres && errors.vehical_tyres)}
                  fullWidth
                  helperText={touched.vehical_tyres && errors.vehical_tyres}
                  label="Vehical Tyres"
                  margin="normal"
                  name="vehical_tyres"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.vehical_tyres}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.vehical_tonnes && errors.vehical_tonnes)}
                  fullWidth
                  helperText={touched.vehical_tonnes && errors.vehical_tonnes}
                  label="Passing Tonnes"
                  margin="normal"
                  name="vehical_tonnes"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.vehical_tonnes}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.vehical_height && errors.vehical_height)}
                  fullWidth
                  helperText={touched.vehical_height && errors.vehical_height}
                  label="Vehical Height"
                  margin="normal"
                  name="vehical_height"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.vehical_height}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.vehical_flooring && errors.vehical_flooring)}
                  fullWidth
                  helperText={touched.vehical_flooring && errors.vehical_flooring}
                  label="Vehical Flooring"
                  margin="normal"
                  name="vehical_flooring"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.vehical_flooring}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.vehical_length && errors.vehical_length)}
                  fullWidth
                  helperText={touched.vehical_length && errors.vehical_length}
                  label="Vehical Length"
                  margin="normal"
                  name="vehical_length"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.vehical_length}
                  variant="outlined"
                />
                <Box
                  alignItems="center"
                  display="flex"
                  ml={-1}
                >
                  <Checkbox
                    checked={values.policy}
                    name="policy"
                    onChange={handleChange}
                  />
                  <Typography
                    color="textSecondary"
                    variant="body1"
                  >
                    I have filled all correct details.
                    {' '}
                    <Link
                      color="primary"
                      component={RouterLink}
                      to="#"
                      underline="always"
                      variant="h6"
                    >
                      Terms and Conditions
                    </Link>
                  </Typography>
                </Box>
                {Boolean(touched.policy && errors.policy) && (
                  <FormHelperText error>
                    {errors.policy}
                  </FormHelperText>
                )}
                <Box>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Register Vehical
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
      </Card>
      </Grid>
    </Grid>
    </div>
  );
};

export default AddVehicle;