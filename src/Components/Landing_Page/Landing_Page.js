import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "../SignUp/SignUp";
import MetaTags from "react-meta-tags";

import "./Landing_Page.css";

class Landing_Page extends Component {
  state = {
    signUpView: false
  };

  changeViews = e => {
    e.preventDefault();
    this.setState({ signUpView: false });
  };

  render() {
    return (
      <>
        <MetaTags>
          <title>Page 1</title>
          <meta
            id="meta-description"
            name="description"
            content="Some description."
          />
          <meta id="og-title" property="og:title" content="MyApp" />
          <meta id="og-image" property="og:image" content="path/to/image.jpg" />
        </MetaTags>

        <div className="flex-signUpLanding">
          <div className="money-bag">
            <div className="landingIntro-h1">
              <h1 style={{ fontSize: 50, textAlign:"center", marginRight:55 }}>Financial Tracker</h1>
              <h5 id="landing-intro">
                <b>
                  Financial Tracker is an application that facilitates the
                  management
                  of your own money transactions. Our online software
                  helps you
                  
                  automatically track to your plans, your prioritise, and
                  where your
                  money is going as expenses and savings according to
                  your total incomes
                </b>
              </h5>
              <br />
              <Button
                onClick={() => this.setState({ signUpView: true })}
                variant="success" 
                id="joinMe-btn"
              >
                JOIN NOW
              </Button>
            </div>

            <br />
          </div>
          {this.state.signUpView ? (
            <div>
              <SignUp />
            </div>
          ) : (
            ""
          )}
        </div>
      </>
    );
  }
}

export default Landing_Page;
