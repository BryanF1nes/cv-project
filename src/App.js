import React, { Component } from "react";
import General from "./components/General";
import "./App.css";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <h1>CV-Project</h1>
        <General />
      </div>
    );
  }
}

export default App;
