import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import './SignUp.css';

class SignUp extends Component {
  render() {
    return (
      <>
        <div className="signUp-form">
          <Form className="login-form">
            <h1>
              <span1 className="font-weight-bold">Sign up</span1>
            </h1>

            <h4 className="text-center">
              Welcome to the Finantial Application
            </h4>
            <FormGroup>
              <Label>Email: </Label>
              <br />
              <Input
                type="email"
                className="email"
                placeholder="Enter your email"
              />
            </FormGroup>
            <FormGroup>
              <Label>Password: </Label>
              <br />
              <Input
                type="password"
                className="password"
                placeholder="Enter a password"
              />
            </FormGroup>
            <FormGroup>
              <Label>Confirm: </Label>
              <br />
              <Input
                type="password"
                className="password"
                placeholder="Repeat your password"
              />
            </FormGroup>

            <Button className="btn-dark btn-block">Create Account</Button>

            <Link to="/sign-in">
              <p>Continue with your existing account</p>
            </Link>
          </Form>
        </div>
      </>
    );
  }
}

export default SignUp;
