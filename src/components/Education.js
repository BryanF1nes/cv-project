import React, { Component } from "react";
import "../components/General.css";

class Education extends Component {
  constructor() {
    super();
  }

  render() {
    const { school, degree, year, onButtonClicked, handleChange } = this.props;

    return (
      <div>
        <h1>Education Experience</h1>
        <form className="App" onSubmit={onButtonClicked}>
          <label>School Name</label>
          <input
            type="text"
            id="school-name"
            name="school"
            placeholder="School Name"
            value={school}
            onChange={handleChange}
            required
          ></input>
          <label>Degree</label>
          <input
            type="text"
            id="degree"
            name="degree"
            placeholder="Degree"
            value={degree}
            onChange={handleChange}
            required
          ></input>
          <label>Year Graduated</label>
          <input
            type="text"
            id="year"
            name="year"
            placeholder="Year Graduated"
            value={year}
            onChange={handleChange}
            required
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Education;
