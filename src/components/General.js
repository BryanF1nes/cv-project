import React, { Component } from "react";
import "../components/General.css";
import "../components/Button.css";

class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      number,
      onButtonClicked,
      handleChange,
    } = this.props;

    return (
      <div>
        <h1>General Information</h1>
        <form className="App" onSubmit={onButtonClicked}>
          <label>First Name *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First-Name"
            value={firstName}
            onChange={handleChange}
            required
          ></input>
          <label>Last Name *</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last-Name"
            value={lastName}
            onChange={handleChange}
            required
          ></input>
          <label>Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            required
          ></input>
          <label>Phone Number *</label>
          <input
            type="text"
            id="phoneNumber"
            name="number"
            placeholder="Phone Number"
            value={number}
            onChange={handleChange}
            required
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default General;
