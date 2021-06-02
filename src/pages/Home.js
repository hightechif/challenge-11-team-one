import React, { Component } from "react";
import NavbarComponent from "../components/NavbarComponent";

export default class Home extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <h1>Homepage</h1>
      </div>
    );
  }
}
