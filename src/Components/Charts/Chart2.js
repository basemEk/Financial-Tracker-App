import React, { Component } from "react";

class Chart2 extends Component {
  render() {
    return (
      <>
        <button onClick={this.props.handleBackToForm}>Back</button>
        <label>diagram 2</label>
        <input type="text" />
        <button>OK</button>
      </>
    );
  }
}

export default Chart2;
