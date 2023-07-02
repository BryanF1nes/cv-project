import React, { Component, useState } from "react";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Document from "./components/Document";
import "./App.css";

const App = () => {
  const [componentCount, setComponentCount] = useState(1);
  const [allValues, setAllValues] = useState({
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
  });

  const handleChange = (e) => {
    setAllValues(e.target.value);
  };

  const handleSubmit = () => {
    if (componentCount < 4) {
      setComponentCount(componentCount + 1);
    } else {
      setComponentCount((componentCount = 1));
    }
  };

  return (
    <div className="App">
      <h1>CV-Project</h1>
      {componentCount && (
        <General
          onButtonClicked={handleSubmit}
          firstName={allValues.firstName}
          lastName={allValues.lastName}
          email={allValues.email}
          number={allValues.number}
          handleChange={handleChange}
        />
      )}
      {componentCount === 2 && (
        <Education
          onButtonClicked={handleSubmit}
          school={allValues.school}
          degree={allValues.degree}
          year={allValues.year}
          handleChange={handleChange}
        />
      )}
      {componentCount === 3 && (
        <Experience
          onButtonClicked={handleSubmit}
          currentJob={allValues.currentJob}
          position={allValues.position}
          startDate={allValues.startDate}
          lastJob={allValues.lastJob}
          handleChange={handleChange}
        />
      )}
      {componentCount === 4 && (
        <Document
          firstName={allValues.firstName}
          lastName={allValues.lastName}
          email={allValues.email}
          number={allValues.number}
          school={allValues.school}
          degree={allValues.degree}
          year={allValues.year}
          currentJob={allValues.currentJob}
          position={allValues.position}
          startDate={allValues.startDate}
          lastJob={allValues.lastJob}
        />
      )}
    </div>
  );
};

export default App;
