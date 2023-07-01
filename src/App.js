import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Document from "./components/Document";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      component: 1,
      // General Component State
      firstName: "",
      lastName: "",
      email: "",
      number: "",

      // Education Component State
      school: "",
      degree: "",
      year: "",

      // Experience Component State
      currentJob: "",
      position: "",
      startDate: "",
      lastJob: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit() {
    if (this.state.component < 4) {
      this.setState({
        component: this.state.component + 1,
      });
    } else {
      this.setState({ component: 1 });
    }
  }

  // Handles General State Change
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <h1>CV-Project</h1>
        {this.state.component === 1 && (
          <General
            onButtonClicked={this.handleSubmit}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            number={this.state.number}
            handleChange={this.handleChange}
          />
        )}
        {this.state.component === 2 && (
          <Education
            onButtonClicked={this.handleSubmit}
            school={this.state.school}
            degree={this.state.degree}
            year={this.state.year}
            handleChange={this.handleChange}
          />
        )}
        {this.state.component === 3 && (
          <Experience
            onButtonClicked={this.handleSubmit}
            currentJob={this.state.currentJob}
            position={this.state.position}
            startDate={this.state.startDate}
            lastJob={this.state.lastJob}
            handleChange={this.handleChange}
          />
        )}
        {this.state.component === 4 && (
          <Document
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            number={this.state.number}
            school={this.state.school}
            degree={this.state.degree}
            year={this.state.year}
            currentJob={this.state.currentJob}
            position={this.state.position}
            startDate={this.state.startDate}
            lastJob={this.state.lastJob}
          />
        )}
      </div>
    );
  }
}

export default App;
