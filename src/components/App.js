import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Navigation } from "./";
import { Landing } from "./";
import { SignUp } from "./";
import { SignIn } from "./";
import { PasswordForget } from "./";
import { Home } from "./";
import { Account } from "./";

import { withAuthentication } from "./";

import * as routes from "../constants/routes";

const App = () =>
  <Router>
    <div>
      <Navigation />

      <hr />

      <Route exact path={routes.LANDING} component={() => <Landing />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUp />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignIn />} />
      <Route
        exact
        path={routes.PASSWORD_FORGET}
        component={() => <PasswordForget />}
      />
      <Route exact path={routes.HOME} component={() => <Home />} />
      <Route exact path={routes.ACCOUNT} component={() => <Account />} />
    </div>
  </Router>;

export default withAuthentication(App);
