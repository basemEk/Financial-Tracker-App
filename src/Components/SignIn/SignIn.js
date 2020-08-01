import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FacebookLoginButton } from "react-social-login-buttons";
import { Link } from "react-router-dom";
import Header from '../Header/Header';

import "./SignIn.css";

export default class SignIn extends Component {
  render() {
    return (
      <>
      <Header/>
        <Form className="login-form">
          <h1>
            <span1 className="font-weight-bold">Sign in</span1>
          </h1>

          <h4 className="text-center">Happy to see you again!</h4>
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
              placeholder="Enter your password"
            />
          </FormGroup>

          <Button className="btn-dark btn-block">Log in</Button>
          <div className="text-center pt-3">
            Or continue with your social account
          </div>
          <FacebookLoginButton />
          <div className="text-center">
            <Link to="/sign-up">Sign up | </Link>
            <span className="p-2"></span>
            <a href="/sign up">Forget password</a>
          </div>
        </Form>
        
      </>
    );
  }
}
