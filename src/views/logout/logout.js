import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import SignIn from '../SignIn/SignIn';

const logout = props => {
    const { history } = props;
    localStorage.clear();
    history.push('/sign-in');

    return(
        <SignIn/>
    );
}

logout.propTypes = {
    history: PropTypes.object
  };
  
  export default withRouter(logout);