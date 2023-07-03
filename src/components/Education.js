import React, { Component } from "react";
import "../components/General.css";

const Education = ({
  school,
  degree,
  year,
  onButtonClicked,
  handleSchoolChange,
  handleDegreeChange,
  handleYearChange,
}) => {
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
          onChange={(e) => handleSchoolChange(e.target.value)}
          required
        ></input>
        <label>Degree</label>
        <input
          type="text"
          id="degree"
          name="degree"
          placeholder="Degree"
          value={degree}
          onChange={(e) => handleDegreeChange(e.target.value)}
          required
        ></input>
        <label>Year Graduated</label>
        <input
          type="text"
          id="year"
          name="year"
          placeholder="Year Graduated"
          value={year}
          onChange={(e) => handleYearChange(e.target.value)}
          required
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Education;
