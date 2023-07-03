import React, { Component } from "react";
import "../components/General.css";
import "../components/Button.css";

const Experience = ({
  currentJob,
  position,
  startDate,
  lastJob,
  onButtonClicked,
  handleCurrentJobChange,
  handlePositionChange,
  handleStartDateChange,
  handleLastJobChange,
}) => {
  return (
    <div>
      <h1>Work Experience</h1>
      <form className="App" onSubmit={onButtonClicked}>
        <label>Current Job *</label>
        <input
          type="text"
          id="currentJob"
          name="currentJob"
          placeholder="Current Job"
          value={currentJob}
          onChange={(e) => handleCurrentJobChange(e.target.value)}
          required
        ></input>
        <label>Title/Position *</label>
        <input
          type="text"
          id="position"
          name="position"
          placeholder="Title/Position"
          value={position}
          onChange={(e) => handlePositionChange(e.target.value)}
          required
        ></input>
        <label>Start Date *</label>
        <input
          type="text"
          id="startDate"
          name="startDate"
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => handleStartDateChange(e.target.value)}
          required
        ></input>
        <label>Last Job *</label>
        <input
          type="text"
          id="lastJob"
          name="lastJob"
          placeholder="Last Job"
          value={lastJob}
          onChange={(e) => handleLastJobChange(e.target.value)}
          required
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Experience;
