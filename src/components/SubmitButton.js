import React, { Component } from "react";
import "../components/Button.css";

class SubmitButton extends Component {
  constructor(props) {
    super();
  }

  render() {
    return <button onClick={this.props.clickHandler}>Submit</button>;
  }
}

export default SubmitButton;
