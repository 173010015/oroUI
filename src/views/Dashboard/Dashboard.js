import React from 'react';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      This is Dashboard
    </div>
  );
};

export default Dashboard;
