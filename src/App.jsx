import React, { Component } from "react";
import User from "./Component/User";
import UserForm from "./Component/UserForm";
import "./Component/Form.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  handleAddNewUser = (newUser) => {
    this.setState({
      users: [...this.state.users, newUser],
    });
  };

  render() {
    const users = this.state.users.map((user, index) => {
      return <User user={user} index={index} />;
    });
    return (
      <div>
        <UserForm addNewUser={this.handleAddNewUser} />
        {users}
      </div>
    );
  }
}
export default App;
