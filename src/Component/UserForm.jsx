import React, { Component } from "react";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      gen: "",
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNewUser(this.state);
    this.setState({
      name: "",
      email: "",
      Gen: "",
    });
  };
  render() {
    return (
      <>
        <h1 style={{ textAlign: "center" }}>User Form</h1>
        <div className="form-content">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                placeholder="enter full name"
                onChange={this.handleChange}
                value={this.state.name}
              />
            </div>
            <div className="form-content">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="enter a valid email"
                onChange={this.handleChange}
                value={this.state.email}
              />
            </div>
            <div className="form-content">
              <label htmlFor="Number">Gen:</label>
              <input
                type="Number"
                name="gen"
                onChange={this.handleChange}
                value={this.state.phone}
              />
            </div>
            <button>Add User</button>
          </form>
        </div>
      </>
    );
  }
}
export default UserForm;
