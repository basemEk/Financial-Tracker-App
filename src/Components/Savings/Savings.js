import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "./Savings.css";
import ViewAddSaving from '/home/bassem/Desktop/financial-app/Code/front/src/Components/ViewAddSaving/ViewAddSaving.js'
import Header from "../Header/Header";

export default class Savings extends Component {
  state = {
    isSavingView: true
  };

  changeView = e => {
    e.preventDefault();
    this.setState({ isSavingView: true });
  };

  render() {
    return (
      <>
        <Header />

        {this.state.isSavingView ? (
          <>
            <div className="savings-h1-h5-btn">
              <h1 id="savings-h1">Saving plans</h1>
              <h6 id="savings-h5">
                <i>
                  Note: You can have more than one saving plan
                  <br /> accourding to your Incomes and Expenses
                </i>
              </h6>
              <Button
                onClick={() => this.setState({ isSavingView: false })}
                variant="success"
                id="ADD-btn"
              >
                Add
              </Button>
              <br />
            </div>

            <div className="savingsTable-wrapper">
              <Table striped bordered hover size="sm" id="saving-size">
                <thead id="savings-thead">
                  <tr>
                    <th>Plans</th>
                    <th>Description</th>
                    <th>Progress bar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="text" className="text-length" />
                    </td>
                    <td>
                      <input type="text" className="text-length" />
                    </td>
                    <td>
                      <input type="text" className="text-length" />
                    </td>
                    <td>
                      <Button variant="warning" id="edit-btn">
                        Edit
                      </Button>
                    </td>
                    <td>
                      <Button variant="danger" id="delete-btn">
                        Delete
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </>
        ) : (
          <ViewAddSaving changeView={this.changeView} />
        )}
      </>
    );
  }
}
