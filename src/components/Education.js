import React, { Component } from "react";
import SubmitButton from "./SubmitButton";
import "../components/General.css";

class Education extends Component {
  render() {
    return (
      <form className="App">
        <label>School Name</label>
        <input type="text" id="f-name" placeholder="School Name"></input>
        <label>Degree</label>
        <input type="text" id="l-name" placeholder="Degree"></input>
        <label>Graduated Year</label>
        <input type="email" id="email" placeholder="Graduated Year"></input>
        <SubmitButton clickHandler={(e) => this.handleClick(e)} />
      </form>
    );
  }
}

export default Education;
