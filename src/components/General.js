import React, { Component } from "react";
import "../components/General.css";

class General extends Component {
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
        <button>Submit</button>
      </form>
    );
  }
}

export default General;
