import { connect } from "react-redux";
import { compose } from "recompose";

// component imports
import HomePage from "../../components/HomePage";

// container imports
import withAuthorization from "../../containers/Session/withAuthorization";

const mapStateToProps = state => ({
  users: state.userState.users
});

const mapDispatchToProps = dispatch => ({
  onSetUsers: users => dispatch({ type: "USERS_SET", users })
});

const authCondition = authUser => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, mapDispatchToProps)
)(HomePage);
