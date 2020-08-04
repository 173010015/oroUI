import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout, PrivateRouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  SignIn as SignInView,
  SignUp as SignUpView,
  signInOtpRouter as SignInOtpView,
  Dashboard as DashboardView,
  AddLoad as AddLoadView,
  InteractiveList as searchView,
  Account as AccountView,
  OtpVerifyRouter as OtpVerifyView
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/sign-in"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={SignInOtpView}
        exact
        layout={MinimalLayout}
        path="/sign-in/otp"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      />
       <RouteWithLayout
        component={OtpVerifyView}
        exact
        layout={MinimalLayout}
        path="/verify"
      />
       <PrivateRouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
       <PrivateRouteWithLayout
        component={AddLoadView}
        exact
        layout={MainLayout}
        path="/load/add"
      />
      <RouteWithLayout
        component={searchView}
        exact
        layout={MinimalLayout}
        path="/search"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
    </Switch>
  );
};

export default Routes;
