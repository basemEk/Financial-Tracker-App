import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ViewAddExpense from "/home/bassem/Desktop/financial-app/Code/front/src/Components/ViewAddExpense/ViewAddExpense.js";
import "./Expenses.css";
import Header from "../Header/Header";

export default class Incomes extends Component {
  state = {
    isTableView: true
  };

  changeView = e => {
    e.preventDefault();
    this.setState({ isTableView: true });
  };

  render() {
    return (
      <>
        <Header />

        {this.state.isTableView ? (
          <>
            <div className="incomes-form">
              <h1>Expenses</h1>
              <h5 id="income-h5">Set your expenses here:</h5>
              <br />
              <div>
                <Button
                  onClick={() => this.setState({ isTableView: false })}
                  variant="success"
                  className="ADD-btn"
                >
                  Add
                </Button>
                <br />
              </div>

              <div className="table-form">
                {/* <table>
                    <tr>
                      <th>Name</th>
                      <th>Category</th>
                      <th>Description</th>
                      <th>Amount</th>
                    </tr>

                    <tr>
                      <td>
                        <input type="text" />
                      </td>
                      <td>
                        <input type="text" />
                      </td>
                      <td>
                        <input type="text" />
                      </td>
                      <td>
                        <input type="text" />
                      </td>
                      <th>
                        <Button variant="warning" id="edit-btn-i">
                          Edit
                        </Button>
                        <Button variant="danger" id="delete-btn">
                          Delete
                        </Button>
                      </th>
                    </tr>
                  </table> */


                <table class="table">
                  <thead>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Amount</th>
                  </thead>
                  <tbody>
                  <tr id="thead-color">                   
                      <td data-label="Name">
                        <input type="text" />
                      </td>
                      <td data-label="Category">
                        <input type="text" />
                      </td>
                      <td data-label="Description">
                        <input type="text" />
                      </td>
                      <td data-label="Amount">
                        <input type="text" />
                      </td>
                      <td>
                        <Button variant="warning" id="edit-btn-i">
                          Edit
                        </Button>
                        <Button variant="danger" id="delete-btn">
                          Delete
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                }
              </div>
              <br />
              <br />
            </div>
          </>
        ) : (
          <ViewAddExpense changeView={this.changeView} />
        )}
      </>
    );
  }
}
