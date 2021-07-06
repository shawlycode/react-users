import React, { Component } from "react";
import User from "./Component/User";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
      {
        name: "orlando",
        email: "orlandoshawly@gmail.com",
        gen: "18",
      },
      {
        name: "Micky",
        email: "micky@gmail.com",
        gen: "25",
      },
    ]};
  };

  
  render() {
    const users = this.state.users.map((user, index) => {
      return(
        <User user={user} index={index} />       
      )
    })
    return (
      <div>
        {users}
      </div>
    );
  }
}
export default App;
