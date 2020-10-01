import React, { useState } from 'react';
import clsx from 'clsx';
import 'date-fns';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import  { MuiPickersUtilsProvider,KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField
} from '@material-ui/core';
import Moment from 'moment';
import api from  '../../utils/AxiosUtil';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const LoadForm = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [values, setValues] = useState({
    start_location: '',
    drop_location: '',
    shipment_type: '',
    shipment_weight: '',
    shipment_date: Moment().format(),
    vehicle_required_type: '',
    wheelsNo: '0',
    companyName: ''
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const shipmentTypes = [
    {label: ''},
    {label: 'Household Goods'},
    {label: 'Healthcare/Pharmacy Products/Medicines'},
    {label: 'Rice/wheat/grains'},
    {label: 'Fresh fruits/vegetables'},
    {label: 'FMCG/Packaged food products'},
    {label: 'Chemicals Powder/Liquid Barrels'},
    {label: 'Fertlizier'},
    {label: 'Electronic goods/Home Appliances'},
    {label: 'Paper /packaging/Printed Material'},
    {label: 'Electrical Transformer/Panels/Equiments/Spare Parts'},
    {label: 'Solar/Battery/Inverter Products'},
    {label: 'Ceramic/Hardware supplies'},
    {label: 'Electrical Wires/Cables'},
    {label: 'Books/Stationery/Toys/GIFTS'},
    {label: 'Aluminium /Steel/Metal products'},
    {label: 'Building/Construction Material'},
    {label: 'Paint/Houseware supplies'},
    {label: 'Engineering goods'},
    {label: 'Textile /Garments'},
    {label: 'Plastics/PVC/Rubber'},
    {label: 'Machine /Auto patrts'},
    {label: 'Exhibitions/Event supplies'},
    {label: 'Furniture/plywood/laminate'},
    {label: 'Part load service'},
    {label: 'Parcel and courier service'},
    {label: 'Car/Bike/Scooter Transport'},
    {label: 'Scrap'},
  ];

  const vehicleTypes=[
    {label: ''},
    {label: 'LCV open body'},
    {label: 'LCV closed body'},
    {label: 'Open Body Tauras'},
    {label: 'Trailer 40 feet'},
    {label: 'Containerized truck'}
  ]

  
  const handleDateChange = date => {
    setValues({
      ...values,
      shipment_date: Moment(date).format().toString().substring(0,10)
    });
  };


  const handleShipment = event => {
    console.log(values);
    let headers =new Headers();
    headers.set('Content-Type','application/json');
    headers.set('Authorization','Token f2d7ae84da458ef5e046e44c2193f76773d78489')
    api.post('/shipment',{
      start_location: values.start_location,
      drop_location: values.drop_location,
      shipment_type: values.shipment_type,
      shipment_weight: values.shipment_weight,
      shipment_date: values.shipment_date,
      vehicle_required_type: values.vehicle_required_type,
      wheelsNo: values.wheelsNo,
      companyName: values.companyName
    })
      .then((response) => console.log(response))
      .catch((err) => {
        console.log(values);
        console.log(headers);
        console.log(err, err.response);
        if (err.response.status >= 400) {
          alert('Account already exists');
        }
      });
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
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
      <form
        autoComplete="off"
        noValidate
        onSubmit={handleShipment}
      >
        <CardHeader
          subheader="Enter the Shipment details"
          title="Add Shipment"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Start Location"
                margin="dense"
                name="start_location"
                onChange={handleChange}
                required
                value={values.start_location}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Drop Location"
                margin="dense"
                name="drop_location"
                onChange={handleChange}
                required
                value={values.drop_location}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Shipment Weight in Tonnes"
                label="Shipment Weight"
                margin="dense"
                name="shipment_weight"
                onChange={handleChange}
                required
                value={values.shipment_weight}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  ampm={false}
                  disablePast
                  format="yyyy-MM-dd"
                  label="Shipment Date"
                  onChange={handleDateChange}
                  onError={console.log}
                  name="shipment_date"
                  value={values.shipment_date}
                  variant="inline"
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Shipment Type"
                margin="dense"
                name="shipment_type"
                onChange={handleChange}
                required
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true }}
                value={values.shipment_type}
                variant="outlined"
              >
                {shipmentTypes.map(option => (
                  <option
                    key={option.label}
                    value={option.label}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Vehicle Type"
                margin="dense"
                name="vehicle_required_type"
                onChange={handleChange}
                required
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true }}
                value={values.vehicle_required_type}
                variant="outlined"
              >
                {vehicleTypes.map(option => (
                  <option
                    key={option.label}
                    value={option.label}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Wheel Number"
                margin="dense"
                name="wheelsNo"
                onChange={handleChange}
                required
                value={values.wheelsNo}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Bid Price"
                margin="dense"
                name="bidPrice"
                onChange={handleChange}
                required
                value={values.bidPrice}
                variant="outlined"
              />
            </Grid>
          </Grid>
          
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            type="submit"
            variant="contained"
          >
            Save details
          </Button>
        </CardActions>
      </form>
    </Card>
    </Grid>
    </Grid>
    </div>
  );
};

LoadForm.propTypes = {
  className: PropTypes.string
};

export default LoadForm;
