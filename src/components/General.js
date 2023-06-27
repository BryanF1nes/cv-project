import React, { Component, useState } from "react";
import SubmitButton from "../components/SubmitButton";
import "../components/General.css";

class General extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Initial State",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      name: "React State",
    });
    e.preventDefault();
  }

  render() {
    return (
      <form className="App">
        <label>First Name</label>
        <input type="text" id="f-name" placeholder="First-Name"></input>
        <label>Last Name</label>
        <input type="text" id="l-name" placeholder="Last-Name"></input>
        <label>Email</label>
        <input type="email" id="email" placeholder="Email"></input>
        <label>Phone Number</label>
        <input type="text" id="phone" placeholder="Phone Number"></input>
        <SubmitButton clickHandler={(e) => this.handleClick(e)} />
        <h1>{this.state.name}</h1>
      </form>
    );
  }
}

export default General;
