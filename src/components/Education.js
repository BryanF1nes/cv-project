import React, { Component } from "react";
import "../components/General.css";

class Education extends Component {
  constructor() {
    super();

    this.state = {
      school: "",
      degree: "",
      year: "",
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    //object           //key            //value
    this.setState({ [e.target.name]: e.target.value });
  }

  handleLogin(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>Education Experience</h1>
        <form className="App">
          <label>School Name</label>
          <input
            type="text"
            id="school-name"
            name="school"
            placeholder="School Name"
            value={this.state.school}
            onChange={this.handleChange}
            required
          ></input>
          <label>Degree</label>
          <input
            type="text"
            id="degree"
            name="degree"
            placeholder="Degree"
            value={this.state.degree}
            onChange={this.handleChange}
            required
          ></input>
          <label>Year Graduated</label>
          <input
            type="text"
            id="year"
            name="year"
            placeholder="Year Graduated"
            value={this.state.year}
            onChange={this.handleChange}
            required
          ></input>
          <button onClick={this.props.onButtonClicked}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Education;