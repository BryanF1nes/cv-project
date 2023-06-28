import React, { Component } from "react";
import SubmitButton from "./SubmitButton";
import "./General.css";

class Experience extends Component {
  render() {
    return (
      <form className="App">
        <label>Company Name</label>
        <input type="text" id="c-name" placeholder="Company Name"></input>
        <label>Position/Title</label>
        <input type="text" id="l-name" placeholder="Position-Title"></input>
        <label>Date</label>
        <input type="email" id="email" placeholder="Date"></input>
        <label>Last Job</label>
        <input type="text" id="phone" placeholder="Last-Job"></input>
        <SubmitButton clickHandler={(e) => this.handleClick(e)} />
      </form>
    );
  }
}

export default Experience;
