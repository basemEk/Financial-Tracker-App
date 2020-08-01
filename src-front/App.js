import React, { Component } from "react";
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing_Page from "./Components/Landing_Page/Landing_Page";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignIn/SignIn";
import Incomes from "./Components/Incomes/Incomes";
import Expenses from "./Components/Expenses/Expenses";
import Savings from "./Components/Savings/Savings";
import Reports from "./Components/Reports/Reports";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>        
            <Route path="/signup" exact component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/incomes" component={Incomes} />
            <Route path="/expenses" component={Expenses} />
            <Route path="/savings" component={Savings} />
            <Route path="/reports" component={Reports} />
            <Route path="/" component={Landing_Page} />
          </Switch>
          
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
