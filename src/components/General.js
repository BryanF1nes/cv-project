import React, { Component, useState } from "react";
import "../components/General.css";
import "../components/Button.css";

class General extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      number: "",
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleLogin(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>General Information</h1>
        <form className="App">
          <label>First Name *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First-Name"
            value={this.state.firstName}
            onChange={this.handleChange}
            required
          ></input>
          <label>Last Name *</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last-Name"
            value={this.state.lastName}
            onChange={this.handleChange}
            required
          ></input>
          <label>Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          ></input>
          <label>Phone Number *</label>
          <input
            type="text"
            id="phoneNumber"
            name="number"
            placeholder="Phone Number"
            value={this.state.number}
            onChange={this.handleChange}
            required
          ></input>
          <button onClick={this.updateCount}>Submit</button>
        </form>
      </div>
    );
  }
}

export default General;
