import React, { Component } from "react";
import "./ViewAddSaving.css";

class ViewAddSaving extends Component {
  render() {
    return (
      <>
        <div className="saving-form">
        <h1>Set your Saving plan:</h1>
          <br />
          <div className="amount-currency">
          <label for="saving-amount">Amount:</label>
          <input type="text" name="saving-amount" className="saving-amount" />

          <select name="sMode" id="saving-currency">     
            <option value="dollar">USD</option>
            <option value="leb-lira">LBP</option>
          </select>
          </div>
         
          
          <br />
          <div className="mode-startEnd-btn">
          <label for="start-date">Mode:</label>
          <select name="sMode" id="chooseMode">     
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
          <br />
          <label for="start-date">Start date:</label>
          <input type="date" id="start-date" name="start-date" />
          <br />
          <label for="end-date">End date:</label>
          <input type="date" id="end-date" name="end-date" />
          <br /><br/>
          <input
            type="submit"
            onClick={e => this.props.changeView(e)}
            id="submit-btn"
          />
        </div>
        </div>
      </>
    );
  }
}

export default ViewAddSaving;
