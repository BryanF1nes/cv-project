import React, { Component, useState } from "react";
import "../components/General.css";
import "../components/Button.css";

const Experience = ({
  currentJob,
  position,
  startDate,
  lastJob,
  onButtonClicked,
  handleChange,
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
          onChange={handleChange}
          required
        ></input>
        <label>Title/Position *</label>
        <input
          type="text"
          id="position"
          name="position"
          placeholder="Title/Position"
          value={position}
          onChange={handleChange}
          required
        ></input>
        <label>Start Date *</label>
        <input
          type="text"
          id="startDate"
          name="startDate"
          placeholder="Start Date"
          value={startDate}
          onChange={handleChange}
          required
        ></input>
        <label>Last Job *</label>
        <input
          type="text"
          id="lastJob"
          name="lastJob"
          placeholder="Last Job"
          value={lastJob}
          onChange={handleChange}
          required
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Experience;
