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
        name:"",
        email:"",
        gen: ""
    })

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
            <div className="form-content">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          </div>
          <div className="form-content">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          </div>
              <div className="form-content">
          <label htmlFor="Gen">Gen:</label>
          <input
            type="Number"
            name="gen"
            onChange={this.handleChange}
            value={this.state.gen}
          /></div>
          <button>Add User</button>
        </form>
      </div>
    );
  }
}
export default UserForm;
