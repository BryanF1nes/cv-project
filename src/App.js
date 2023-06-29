import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      component: 1
    }

    this.updateCount = this.updateCount.bind(this)
  }

  updateCount() {
    if (this.state.component < 3) {
      this.setState({
        component: this.state.component + 1
      })
    } else {
      this.setState({ component: 1})
    }
  }

  render() {
    let header = <h1>CV-Project</h1>
    const myHeader = header

    return (
      <div className="App">
        {myHeader}
        {this.state.component === 1 && <General />}
        {this.state.component === 2 && <Education />}
        {this.state.component === 3 && <Experience />}
      </div>
    );
  }
}

export default App;