import React from "react";
import * as routes from "../../constants/routes";
import { Link } from "react-router-dom";

const PasswordForgetLink = () =>
  <p>
    <Link to={routes.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>;

export default PasswordForgetLink;
