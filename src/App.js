import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing_Page from "./Components/Landing_Page/Landing_Page";
import SignIn from "./Components/SignIn/SignIn";
import Incomes from "./Components/Incomes/Incomes";
import Expenses from "./Components/Expenses/Expenses";
import Savings from "./Components/Savings/Savings";
import Reports from "./Components/Reports/Reports";
import Footer from "./Components/Footer/Footer";
import ViewAddIncome from "./Components/ViewAddIncome/ViewAddIncome";
import ViewAddExpense from "./Components/ViewAddExpense/ViewAddExpense";


class App extends Component {
  render() {
    return (
      <>
        <Router>
          

          <Switch>
            <Route path="/sign-in" component={SignIn} />
            <Route path="/incomes" component={Incomes} />
            <Route path="/incomes/viewincome" exact component={ViewAddIncome} />
            <Route path="/expenses" component={Expenses} />
            <Route path="/incomes/viewexpense" exact component={ViewAddExpense} />
            <Route path="/savings" component={Savings} />
            <Route path="/reports" component={Reports}/>
            <Route path="/" component={Landing_Page} />
          </Switch>

          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
