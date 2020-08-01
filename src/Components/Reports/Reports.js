import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import Button from "react-bootstrap/Button";
import "./Reports.css";
import Header from '../Header/Header';

const state = {
  labels: [
    "Recuring Expenses",
    "Fixed Expenses",
    "Recuring Incomes",
    "Fixed Incomes",
    "Saving plans"
  ],

  datasets: [
    {
      label: "finance",

      backgroundColor: ["#B21F00", "#C9DE00", "#2FDE00", "#00A6B4", "#6800B4"],

      hoverBackgroundColor: [
        "#501800",

        "#4B5000",

        "#175000",

        "#003350",

        "#35014F"
      ],

      data: [65, 59, 80, 81, 56]
    }
  ]
};

export default class Reports extends React.Component {
  render() {
    return (
      <>
      <Header/>
        <div className="charts-form">
          <div id="form-report">
            <h2>Choose diagram details:</h2>
            <br />
            <span>Diagram:</span>
            <select name="shape" id="charts-list">
              <option value="pie-chart">Pie chart</option>
              <option value="bar-chart">Bar chart</option>
            </select>
            <br />
            <br />
            <span>Period:</span>
            <select name="shape" id="charts-list">
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
            <br />
            <br />

            <span>Category:</span>
            <select name="shape" id="charts-list">
              <option value="pie-chart">Recuring</option>
              <option value="bar-chart">Fixed</option>
            </select>
            <br />
            <br />
            <Button variant="success" id="ADD-btn">
              OK
            </Button>
          </div>
        </div>

        <div
          style={{ position: "relative", width: 650, height: 800, margin: 100 }}
        >
          <Pie
            data={state}
            options={{
              title: {
                display: true,
                text: "Average of the Total Incomes, Expenses, and Savings",
                fontSize: 20
              },

              legend: {
                display: true,
                position: "right"
              }
            }}
          />
        </div>

        <div
          style={{ position: "relative", width: 650, height: 800, margin: 75 }}
        >
          <Bar
            data={state}
            options={{
              title: {
                display: true,
                text: "Average of the Total Incomes, Expenses, and Savings",
                fontSize: 20
              },
              legend: {
                display: true,
                position: "right"
              }
            }}
          />
        </div>
      </>
    );
  }
}



