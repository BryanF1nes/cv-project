import React, { Component, useState } from "react";
import "../components/General.css";
import "../components/Button.css";

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentJob: '',
      position: '',
      startDate: '',
      lastJob: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <h1>Work Experience</h1>
        <form className="App">
          <label>Current Job *</label>
          <input
            type="text"
            id="currentJob"
            name="currentJob"
            placeholder="Current Job"
            value={this.state.currentJob}
            onChange={this.handleChange}
            required
          ></input>
          <label>Title/Position *</label>
          <input
            type="text"
            id="position"
            name="position"
            placeholder="Title/Position"
            value={this.state.position}
            onChange={this.handleChange}
            required
          ></input>
          <label>Start Date *</label>
          <input
            type="text"
            id="startDate"
            name="startDate"
            placeholder="Start Date"
            value={this.state.startDate}
            onChange={this.handleChange}
            required
          ></input>
          <label>Last Job *</label>
          <input
            type="text"
            id="lastJob"
            name="lastJob"
            placeholder="Last Job"
            value={this.state.lastJob}
            onChange={this.handleChange}
            required
          ></input>
          <button onClick={this.props.onButtonClicked}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Experience;