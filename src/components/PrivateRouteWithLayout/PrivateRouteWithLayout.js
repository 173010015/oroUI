import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SignIn } from '../../views';

const PrivateRouteWithLayout = props => {
  const { layout: Layout, component: Component, ...rest } = props;
  
  return (
    <Route
      {...rest}
      render={matchProps => (
       localStorage.getItem('isAuthenticated') ?
        <Layout>
          <Component {...matchProps} />
        </Layout>
        : <Redirect to = '/sign-in' />
      )}
    />
  );
};

PrivateRouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string
};

export default PrivateRouteWithLayout;
