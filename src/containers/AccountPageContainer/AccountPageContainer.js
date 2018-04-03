import { connect } from "react-redux";
import { compose } from "recompose";

import { AccountPage } from "../../components";

import withAuthorization from "../Session/withAuthorization";

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

const authCondition = authUser => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps)
)(AccountPage);
