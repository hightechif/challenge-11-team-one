import React, { Component } from "react";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import Register from '../components/auth/register'

export default class signUp extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <Register />
        <FooterComponent />
      </div>
    );
  }
}
