import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { AccountProfile, AccountDetails } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(6)
  }
}));

const Account = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid
          item
          lg={10}
          md={6}
          xl={8}
          xs={12}
        >
          <AccountDetails />
        </Grid>
    </div>
  );
};

export default Account;
