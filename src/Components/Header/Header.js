import React, { Component } from "react";
import * as ReactBootstrap from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <>
        <div>
          <div>
            {" "}
            <ReactBootstrap.Navbar
              collapseOnSelect
              expand="lg"
              bg="dark"
              variant="dark"
            >
              {" "}
              <ReactBootstrap.Navbar.Brand href="/Home" id="slogan">
            
              </ReactBootstrap.Navbar.Brand>{" "}
              <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />{" "}
              <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
                {" "}
                <ReactBootstrap.Nav className="mr-auto">
                  {" "}
                  <ReactBootstrap.Nav.Link className=" topBotomBordersOut">
                    <Link to={"/"} className="nav-link ">
                      Landing page
                    </Link>{" "}
                  </ReactBootstrap.Nav.Link>{" "}
                   

                   
                  <ReactBootstrap.Nav.Link className=" topBotomBordersOut">
                    <Link to={"/sign-in"} className="nav-link">
                      Sign-in
                    </Link>{" "}
                  </ReactBootstrap.Nav.Link>

                  <ReactBootstrap.Nav.Link className=" topBotomBordersOut">
                    <Link to={"/incomes"} className="nav-link">
                      Incomes
                    </Link>{" "}
                  </ReactBootstrap.Nav.Link>

                  <ReactBootstrap.Nav.Link className=" topBotomBordersOut">
                    <Link to={"/expenses"} className="nav-link">
                      Expenses
                    </Link>{" "}
                  </ReactBootstrap.Nav.Link>

                  <ReactBootstrap.Nav.Link className=" topBotomBordersOut">
                    <Link to={"/savings"} className="nav-link">
                      Savings
                    </Link>{" "}
                  </ReactBootstrap.Nav.Link>

                  <ReactBootstrap.Nav.Link className=" topBotomBordersOut">
                    <Link to={"/reports"} className="nav-link">
                      Reports
                    </Link>{" "}
                  </ReactBootstrap.Nav.Link>
            
                </ReactBootstrap.Nav>
              </ReactBootstrap.Navbar.Collapse>
            </ReactBootstrap.Navbar>
          </div>
        </div>
      </>
    );
  }
}
