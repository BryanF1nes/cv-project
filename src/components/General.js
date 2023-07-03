import React, { Component } from "react";
import "../components/General.css";
import "../components/Button.css";

const General = ({
  firstName,
  lastName,
  email,
  number,
  onButtonClicked,
  handleFirstNameChange,
  handleLastNameChange,
  handleEmailChange,
  handleNumberChange,
}) => {
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
          onChange={(e) => handleFirstNameChange(e.target.value)}
          required
        ></input>
        <label>Last Name *</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last-Name"
          value={lastName}
          onChange={(e) => handleLastNameChange(e.target.value)}
          required
        ></input>
        <label>Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
          required
        ></input>
        <label>Phone Number *</label>
        <input
          type="text"
          id="phoneNumber"
          name="number"
          placeholder="Phone Number"
          value={number}
          onChange={(e) => handleNumberChange(e.target.value)}
          required
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default General;
