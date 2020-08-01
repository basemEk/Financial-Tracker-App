import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ViewAddIncome from "/home/bassem/Desktop/financial-app/Code/front/src/Components/ViewAddIncome/ViewAddIncome.js";
import "./Incomes.css";
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
              <h1>Incomes</h1>
              <h5 id="income-h5">Set your incomes here:</h5>
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


                <table className="table">
                  <thead>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Amount</th>
                  </thead>
                  <tbody>
                    <tr id="thead-color">
                      <td data-label="Name">
                        <input type="text" id="input-width" />
                      </td>
                      <td data-label="Category">
                        <input type="text" id="input-width"/>
                      </td>
                      <td data-label="Description">
                        <input type="text" id="input-width"/>
                      </td>
                      <td data-label="Amount">
                        <input type="text" id="input-width"/>
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
          <ViewAddIncome changeView={this.changeView} />
        )}
      </>
    );
  }
}
