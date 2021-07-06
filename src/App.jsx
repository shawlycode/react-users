import React, { Component } from "react";
import User from "./Component/User";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
      {
        name: "",
        email: "",
        gen: "",
      },
      {
        name: "",
        email: "",
        gen: "",
      },
      {
        name: "",
        email: "",
        gen: "",
      },
    ]};
  };

  
  render() {
    const users = this.state.users.map((user, index) => {
      return(
        <User users={user} index={index} />       
      )
    })
    return (
      <div>
        <User />
        {users}
      </div>
    );
  }
}
export default App;
