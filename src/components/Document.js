import React, { Component } from "react";
import "../components/Document.css";

class Document extends Component {
  render() {
    const {
      firstName,
      lastName,
      email,
      number,
      school,
      degree,
      year,
      currentJob,
      position,
      startDate,
      lastJob,
    } = this.props;

    return (
      <div>
        <ul>
          <li>First Name: {firstName}</li>
          <li>Last Name: {lastName}</li>
          <li>Email: {email}</li>
          <li>Phone Number: {number}</li>
          <li>School: {school}</li>
          <li>Degree: {degree}</li>
          <li>Graduating Year: {year}</li>
          <li>Current Employer: {currentJob}</li>
          <li>Position: {position}</li>
          <li>Start Date: {startDate}</li>
          <li>Last Job: {lastJob}</li>
        </ul>
      </div>
    );
  }
}

export default Document;
