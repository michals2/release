import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "../Navigation";
import LandingPage from "../LandingPage";
import SignUpPage from "../SignUpPage";
import SignInPage from "../SignInPage";
import PasswordForgetPage from "../PasswordForgetForm";
import HomePage from "../HomePage";
import AccountPage from "../AccountPage";
import withAuthentication from "../../containers/Session/withAuthentication";
import * as routes from "../../constants/routes";

import "./index.css";

const App = () =>
  <Router>
    <div className="app">
      <Navigation />
      <hr />
      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route
        exact
        path={routes.PASSWORD_FORGET}
        component={() => <PasswordForgetPage />}
      />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
    </div>
  </Router>;

export default withAuthentication(App);
