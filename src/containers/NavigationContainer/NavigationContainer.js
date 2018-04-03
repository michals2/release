// library imports
import { connect } from "react-redux";

// component imports
import Navigation from "../../components/Navigation";

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

export default connect(mapStateToProps)(Navigation);
