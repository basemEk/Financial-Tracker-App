import React from "react";
import "./ViewAddExpense.css";

export default class ViewAddExpense extends React.Component {
  render() {
    return (
      <>
        <div className="income-bg">
          <h1>Specify your Expense:</h1>
          <br />
          <form>
            <label>Name</label>
            <input type="text" name="name" required />
            <br />
            <label>Description</label>
            <input type="text" name="text" required />
            <br />
            <label>Date</label>
            <input type="text" name="date" required />
            <br />
            <label>Amount</label>
            <input type="text" name="amount" required />
            <br />

            <select name="currency" id="chooseCurrency">
              <option value="USDOLLAR">Choose Currency</option>
              <option value="Lira">LBP</option>
              <option value="Dollar">USD</option>
            </select>
            <br />

            <select name="type" id="chooseType">
              <option value="rec/fix">Choose Type</option>
              <option value="recurring">Recurring</option>
              <option value="fixed">Fixed</option>
            </select>
            <br />

            <br />
            <br />
            <input
              type="submit"
              onClick={e => this.props.changeView(e)}
              id="submit-btn"
            />
          </form>
        </div>
      </>
    );
  }
}
