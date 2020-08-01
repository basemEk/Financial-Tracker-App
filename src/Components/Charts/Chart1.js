import React, { Component } from "react";

class Chart1 extends Component {
  render() {
    return (
      <>
        <button onClick={this.props.handleBackToForm}>Back</button>
        <label>diagram 1</label>
        <input type="text"/>
        <input type="date" />
      </>
    );
  }
}

export default Chart1;
