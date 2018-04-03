import React, { Component } from "react";
import { db } from "../../firebase";

// component imports
import { UserList } from "../";

class HomePage extends Component {
  componentDidMount() {
    const { onSetUsers } = this.props;

    db.onceGetUsers().then(snapshot => onSetUsers(snapshot.val()));
  }

  render() {
    const { users } = this.props;

    return (
      <div>
        <h1>Home</h1>
        <p>The Home Page is accessible by every signed in user.</p>

        {!!users && <UserList users={users} />}
      </div>
    );
  }
}

export default HomePage;
