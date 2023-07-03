import React, { Component, useState } from "react";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Document from "./components/Document";
import "./App.css";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [year, setYear] = useState("");
  const [currentJob, setCurrentJob] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [lastJob, setLastJob] = useState("");

  const [component, setComponentCount] = useState(1);

  const handleSubmit = () => {
    setComponentCount((prevComponent) => prevComponent + 1);
  };

  return (
    <div className="App">
      <h1>CV-Project</h1>
      {component === 1 && (
        <General
          onButtonClicked={handleSubmit}
          firstName={firstName}
          lastName={lastName}
          email={email}
          number={number}
          handleFirstNameChange={setFirstName}
          handleLastNameChange={setLastName}
          handleEmailChange={setEmail}
          handleNumberChange={setNumber}
        />
      )}
      {component === 2 && (
        <Education
          onButtonClicked={handleSubmit}
          school={school}
          degree={degree}
          year={year}
          handleSchoolChange={setSchool}
          handleDegreeChange={setDegree}
          handleYearChange={setYear}
        />
      )}
      {component === 3 && (
        <Experience
          onButtonClicked={handleSubmit}
          currentJob={currentJob}
          position={position}
          startDate={startDate}
          lastJob={lastJob}
          handleCurrentJobChange={setCurrentJob}
          handlePositionChange={setPosition}
          handleStartDateChange={setStartDate}
          handleLastJobChange={setLastJob}
        />
      )}
      {component === 4 && (
        <Document
          firstName={firstName}
          lastName={lastName}
          email={email}
          number={number}
          school={school}
          degree={degree}
          year={year}
          currentJob={currentJob}
          position={position}
          startDate={startDate}
          lastJob={lastJob}
        />
      )}
    </div>
  );
};

export default App;
