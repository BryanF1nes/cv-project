import React, { Component } from "react";
import "./General.css";

class Experience extends Component {
  constructor() {
    super();

    this.state = {
      company: "",
      title: "",
      date: "",
      lastjob: "",
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleCompany = this.handleCompany.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleLastJob = this.handleLastJob.bind(this);
  }

  handleCompany(e) {
    this.setState({
      company: e.target.value,
    });
  }

  handleTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  handleDate(e) {
    this.setState({
      date: e.target.value,
    });
  }

  handleLastJob(e) {
    this.setState({
      lastjob: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>Work Experience</h1>
        <form className="App">
          <label>Company Name</label>
          <input
            type="text"
            id="company"
            placeholder="Company Name"
            value={this.state.compnay}
            onChange={this.handleCompany}
            required
          ></input>
          <label>Position/Title</label>
          <input
            type="text"
            id="position"
            placeholder="Position-Title"
            value={this.state.title}
            onChange={this.handleTitle}
            required
          ></input>
          <label>Date</label>
          <input
            type="email"
            id="date"
            placeholder="Date"
            value={this.state.date}
            onChange={this.handleDate}
            required
          ></input>
          <label>Last Job</label>
          <input
            type="text"
            id="last-job"
            placeholder="Last-Job"
            value={this.state.lastjob}
            onChange={this.handleLastJob}
            required
          ></input>
          <button onClick={this.handleLogin}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Experience;
